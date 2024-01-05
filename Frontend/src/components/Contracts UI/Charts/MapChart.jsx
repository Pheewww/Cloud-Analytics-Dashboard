import { ResponsiveChoropleth } from "@nivo/geo";
import world_countries from "./world_countries.json";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const MapChart = () => {
  const data = [
    {
      id: "AFG",
      value: 611044,
    },
    {
      id: "AGO",
      value: 80444,
    },
    {
      id: "ALB",
      value: 234570,
    },
    {
      id: "ARE",
      value: 846804,
    },
    {
      id: "ARG",
      value: 489289,
    },
    {
      id: "ARM",
      value: 453081,
    },
    {
      id: "ATA",
      value: 229824,
    },
    {
      id: "ATF",
      value: 204366,
    },
    {
      id: "AUT",
      value: 461830,
    },
    {
      id: "AZE",
      value: 445099,
    },
    {
      id: "BDI",
      value: 410689,
    },
    {
      id: "BEL",
      value: 55110,
    },
    {
      id: "BEN",
      value: 712065,
    },
    {
      id: "BFA",
      value: 714909,
    },
    {
      id: "BGD",
      value: 245292,
    },
    {
      id: "BGR",
      value: 187308,
    },
    {
      id: "BHS",
      value: 422523,
    },
    {
      id: "BIH",
      value: 267391,
    },
    {
      id: "BLR",
      value: 862184,
    },
    {
      id: "BLZ",
      value: 359602,
    },
    {
      id: "BOL",
      value: 509720,
    },
    {
      id: "BRN",
      value: 151339,
    },
    {
      id: "BTN",
      value: 706849,
    },
    {
      id: "BWA",
      value: 241034,
    },
    {
      id: "CAF",
      value: 394313,
    },
    {
      id: "CAN",
      value: 221531,
    },
    {
      id: "CHE",
      value: 836893,
    },
    {
      id: "CHL",
      value: 576033,
    },
    {
      id: "CHN",
      value: 156541,
    },
    {
      id: "CIV",
      value: 758210,
    },
    {
      id: "CMR",
      value: 322426,
    },
    {
      id: "COG",
      value: 964185,
    },
    {
      id: "COL",
      value: 477484,
    },
    {
      id: "CRI",
      value: 978790,
    },
    {
      id: "CUB",
      value: 187131,
    },
    {
      id: "-99",
      value: 863054,
    },
    {
      id: "CYP",
      value: 723667,
    },
    {
      id: "CZE",
      value: 40849,
    },
    {
      id: "DEU",
      value: 574851,
    },
    {
      id: "DJI",
      value: 370730,
    },
    {
      id: "DNK",
      value: 266768,
    },
    {
      id: "DOM",
      value: 878302,
    },
    {
      id: "DZA",
      value: 617434,
    },
    {
      id: "ECU",
      value: 895130,
    },
    {
      id: "EGY",
      value: 436875,
    },
    {
      id: "ERI",
      value: 927103,
    },
    {
      id: "ESP",
      value: 426136,
    },
    {
      id: "EST",
      value: 638761,
    },
    {
      id: "ETH",
      value: 693925,
    },
    {
      id: "FIN",
      value: 257974,
    },
    {
      id: "FJI",
      value: 891992,
    },
    {
      id: "FLK",
      value: 107570,
    },
    {
      id: "FRA",
      value: 586789,
    },
    {
      id: "GAB",
      value: 584829,
    },
    {
      id: "GBR",
      value: 568347,
    },
    {
      id: "GEO",
      value: 41042,
    },
    {
      id: "GHA",
      value: 86903,
    },
    {
      id: "GIN",
      value: 326537,
    },
    {
      id: "GMB",
      value: 522498,
    },
    {
      id: "GNB",
      value: 134672,
    },
    {
      id: "GNQ",
      value: 380919,
    },
    {
      id: "GRC",
      value: 168662,
    },
    {
      id: "GTM",
      value: 27597,
    },
    {
      id: "GUY",
      value: 879212,
    },
    {
      id: "HND",
      value: 32662,
    },
    {
      id: "HRV",
      value: 841892,
    },
    {
      id: "HTI",
      value: 313735,
    },
    {
      id: "HUN",
      value: 567137,
    },
    {
      id: "IDN",
      value: 44902,
    },
    {
      id: "IND",
      value: 123884,
    },
    {
      id: "IRL",
      value: 712150,
    },
    {
      id: "IRN",
      value: 878830,
    },
    {
      id: "IRQ",
      value: 826953,
    },
    {
      id: "ISL",
      value: 57972,
    },
    {
      id: "ISR",
      value: 274899,
    },
    {
      id: "ITA",
      value: 172475,
    },
    {
      id: "JAM",
      value: 530669,
    },
    {
      id: "JOR",
      value: 8885,
    },
    {
      id: "JPN",
      value: 771973,
    },
    {
      id: "KAZ",
      value: 777643,
    },
    {
      id: "KEN",
      value: 714360,
    },
    {
      id: "KGZ",
      value: 322143,
    },
    {
      id: "KHM",
      value: 272706,
    },
    {
      id: "OSA",
      value: 75888,
    },
    {
      id: "KWT",
      value: 409324,
    },
    {
      id: "LAO",
      value: 450692,
    },
    {
      id: "LBN",
      value: 86688,
    },
    {
      id: "LBR",
      value: 491031,
    },
    {
      id: "LBY",
      value: 357619,
    },
    {
      id: "LKA",
      value: 360510,
    },
    {
      id: "LSO",
      value: 994873,
    },
    {
      id: "LTU",
      value: 59022,
    },
    {
      id: "LUX",
      value: 580909,
    },
    {
      id: "LVA",
      value: 14339,
    },
    {
      id: "MAR",
      value: 590430,
    },
    {
      id: "MDA",
      value: 700035,
    },
    {
      id: "MDG",
      value: 678718,
    },
    {
      id: "MEX",
      value: 861869,
    },
    {
      id: "MKD",
      value: 96286,
    },
    {
      id: "MLI",
      value: 370090,
    },
    {
      id: "MMR",
      value: 485894,
    },
    {
      id: "MNE",
      value: 724801,
    },
    {
      id: "MNG",
      value: 696897,
    },
    {
      id: "MOZ",
      value: 16351,
    },
    {
      id: "MRT",
      value: 225366,
    },
    {
      id: "MWI",
      value: 629415,
    },
    {
      id: "MYS",
      value: 388844,
    },
    {
      id: "NAM",
      value: 424546,
    },
    {
      id: "NCL",
      value: 17436,
    },
    {
      id: "NER",
      value: 566479,
    },
    {
      id: "NGA",
      value: 505324,
    },
    {
      id: "NIC",
      value: 953693,
    },
    {
      id: "NLD",
      value: 317502,
    },
    {
      id: "NOR",
      value: 258334,
    },
    {
      id: "NPL",
      value: 567630,
    },
    {
      id: "NZL",
      value: 546925,
    },
    {
      id: "OMN",
      value: 728848,
    },
    {
      id: "PAK",
      value: 678724,
    },
    {
      id: "PAN",
      value: 385562,
    },
    {
      id: "PER",
      value: 686772,
    },
    {
      id: "PHL",
      value: 326044,
    },
    {
      id: "PNG",
      value: 831638,
    },
    {
      id: "POL",
      value: 870198,
    },
    {
      id: "PRI",
      value: 41831,
    },
    {
      id: "PRT",
      value: 182169,
    },
    {
      id: "PRY",
      value: 460240,
    },
    {
      id: "QAT",
      value: 93738,
    },
    {
      id: "ROU",
      value: 596857,
    },
    {
      id: "RUS",
      value: 60482,
    },
    {
      id: "RWA",
      value: 876032,
    },
    {
      id: "ESH",
      value: 976563,
    },
    {
      id: "SAU",
      value: 824631,
    },
    {
      id: "SDN",
      value: 420672,
    },
    {
      id: "SDS",
      value: 13925,
    },
    {
      id: "SEN",
      value: 509732,
    },
    {
      id: "SLB",
      value: 884180,
    },
    {
      id: "SLE",
      value: 584014,
    },
    {
      id: "SLV",
      value: 793544,
    },
    {
      id: "ABV",
      value: 338519,
    },
    {
      id: "SOM",
      value: 524030,
    },
    {
      id: "SRB",
      value: 600260,
    },
    {
      id: "SUR",
      value: 599079,
    },
    {
      id: "SVK",
      value: 669883,
    },
    {
      id: "SVN",
      value: 883730,
    },
    {
      id: "SWZ",
      value: 520026,
    },
    {
      id: "SYR",
      value: 612087,
    },
    {
      id: "TCD",
      value: 718715,
    },
    {
      id: "TGO",
      value: 835554,
    },
    {
      id: "THA",
      value: 838296,
    },
    {
      id: "TJK",
      value: 749883,
    },
    {
      id: "TKM",
      value: 914176,
    },
    {
      id: "TLS",
      value: 4338,
    },
    {
      id: "TTO",
      value: 275637,
    },
    {
      id: "TUN",
      value: 124283,
    },
    {
      id: "TUR",
      value: 364564,
    },
    {
      id: "TWN",
      value: 577684,
    },
    {
      id: "TZA",
      value: 125069,
    },
    {
      id: "UGA",
      value: 163361,
    },
    {
      id: "UKR",
      value: 936341,
    },
    {
      id: "URY",
      value: 657964,
    },
    {
      id: "USA",
      value: 627190,
    },
    {
      id: "UZB",
      value: 145851,
    },
    {
      id: "VEN",
      value: 255141,
    },
    {
      id: "VNM",
      value: 72519,
    },
    {
      id: "VUT",
      value: 430936,
    },
    {
      id: "PSE",
      value: 956535,
    },
    {
      id: "YEM",
      value: 422243,
    },
    {
      id: "ZAF",
      value: 58762,
    },
    {
      id: "ZMB",
      value: 600627,
    },
    {
      id: "ZWE",
      value: 780519,
    },
    {
      id: "KOR",
      value: 2916,
    },
  ];




``
  console.log(world_countries.features);




  return (
    <div
      style={{
        height: "500px",
        width: "100%",
        backgroundColor: "white",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <Typography align="center" fontWeight="bold" marginBottom="10px">
        Map Based Chart - Users in Different Regions
      </Typography>
      <ResponsiveChoropleth
        data={data}
        features={world_countries.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 10 }}
        colors="reds"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
          {
            id: "gradient",
            type: "linearGradient",
            colors: [
              {
                offset: 0,
                color: "#000",
              },
              {
                offset: 100,
                color: "inherit",
              },
            ],
          },
        ]}
        fill={[
          {
            match: {
              id: "CAN",
            },
            id: "dots",
          },
          {
            match: {
              id: "CHN",
            },
            id: "dots",
          },
          {
            match: {
              id: "ATA",
            },
            id: "gradient",
          },
        ]}
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: "#444444",
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000000",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

MapChart.propTypes = {
  features: PropTypes.array.isRequired, // Assuming features is an array 
};

export default MapChart;
