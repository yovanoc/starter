import { RiotAPI, PlatformId, RiotAPITypes } from "@fightmegg/riot-api";

// TS_NODE_COMPILER_OPTIONS='{"module":"commonjs"}' yarn ts-node-script --files services/riot.ts

const rAPI = new RiotAPI("RGAPI-91491774-3a56-44d5-ad4a-f2e79df407c6");

export type Summoner = {
  name: string;
  level: number;
  iconUrl: string;
  levels: {
    [RiotAPITypes.QUEUE.RANKED_SOLO_5x5]: {
      tier: RiotAPITypes.TIER;
      rank: RiotAPITypes.DIVISION;
    };
    [RiotAPITypes.QUEUE.RANKED_FLEX_SR]: {
      tier: RiotAPITypes.TIER;
      rank: RiotAPITypes.DIVISION;
    };
  };
};

const lookup = {
  "SOLO/MID": "MIDDLE",
  "SOLO/TOP": "TOP",
  "NONE/JUNGLE": "JUNGLE",
  "DUO_CARRY/BOTTOM": "BOTTOM",
  "DUO_SUPPORT/BOTTOM": "UTILITY",
} as const;

type LookupKeys = keyof typeof lookup;
type LookupValues = typeof lookup[LookupKeys];

(async () => {
  const summoner = await rAPI.summoner.getBySummonerName({
    region: PlatformId.EUW1,
    summonerName: "Ney",
  });

  console.log("Name", summoner.name, "Level", summoner.summonerLevel);
  const icons = await rAPI.ddragon.profileIcons();
  const icon = icons.data[summoner.profileIconId];
  const group: string = (icon as any).image.group;
  const full: string = (icon as any).image.full;
  const iconUrl = `${rAPI.ddragon.host}/cdn/${icons.version}/img/${group}/${full}`;
  console.log({ iconUrl });
  const entries = await rAPI.league.getEntriesBySummonerId({
    region: PlatformId.EUW1,
    summonerId: summoner.id,
  });
  console.dir(entries);
  const champions = await rAPI.championMastery.getAllChampions({
    region: PlatformId.EUW1,
    summonerId: summoner.id,
  });
  console.log(
    champions.sort((a, b) => b.championPoints - a.championPoints).slice(0, 3)
  );
  // 100 Last matches
  // const competitif = [420, 440, 700];
  const fun = [400, 430];
  const matches = await rAPI.match.getMatchlistByAccount({
    accountId: summoner.accountId,
    region: PlatformId.EUW1,
    params: {
      queue: fun,
    },
  });
  const tmpCouple = matches.matches.reduce((acc, curr) => {
    const key = `${curr.role}/${curr.lane}`;
    const role: LookupValues = lookup[key as LookupKeys];
    if (!role) {
      return acc;
    }
    if (typeof acc[role] === "undefined") {
      acc[role] = 1;
    } else {
      acc[role] += 1;
    }

    return acc;
  }, {} as Record<LookupValues, number>);
  console.log(tmpCouple);
  const tmpChamp = matches.matches.reduce((acc, curr) => {
    const key = curr.champion;
    if (typeof acc[key] === "undefined") {
      acc[key] = 1;
    } else {
      acc[key] += 1;
    }

    return acc;
  }, {} as Record<string, number>);
  console.log(tmpChamp);
})();
