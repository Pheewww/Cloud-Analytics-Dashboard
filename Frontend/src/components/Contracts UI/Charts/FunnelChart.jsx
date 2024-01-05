import { Typography } from "@mui/material";
import { ResponsiveFunnel } from "@nivo/funnel";

const ContractConversionFunnel = () => {
  const data = [
    {
      id: "step_trials",
      value: 10000,
      label: "Trials Started",
    },
    {
      id: "step_demo",
      value: 8000,
      label: "Demo Completed",
    },
    {
      id: "step_proposal",
      value: 6000,
      label: "Proposal Sent",
    },
    {
      id: "step_negotiation",
      value: 4000,
      label: "Negotiation",
    },
    {
      id: "step_closed",
      value: 3000,
      label: "Contracts Closed",
    },
  ];

  return (
    <>
      <Typography
        align="center"
        variant="h6"
        marginBottom={"15px"}
        fontWeight="bold"
      >
        {" "}
        Contract Conversion Rate from Trials
      </Typography>
      <ResponsiveFunnel
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        shapeBlending={0.63}
          Legends={{
            visible: true,
          }}
        valueFormat=" >-.4s"
        colors={{ scheme: "spectral" }}
        borderColor={{ from: "color", modifiers: [] }}
        borderOpacity={0.6}
        labelColor={{
          from: "color",
          modifiers: [["darker", "2.9"]],
        }}
        beforeSeparatorLength={100}
        beforeSeparatorOffset={21}
        afterSeparatorLength={100}
        afterSeparatorOffset={20}
        currentPartSizeExtension={12}
        currentBorderWidth={40}
        motionConfig="wobbly"
      />
    </>
  );
};

export default ContractConversionFunnel;
