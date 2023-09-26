import { Box, SxProps, Tab, Tabs, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC, useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const a11yProps = (index: any) => {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: "0px" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

interface ITabsProps {
  initialValue: number;
  tabs: {
    title: React.ReactNode;
    children: React.ReactNode;
    key?: number;
    button?: React.ReactNode;
  }[];
  tabsContainerSx?: SxProps;
  tabIndicatorSx?: SxProps;
  tabSx?: SxProps;
}
const useStyles = makeStyles((theme) => ({}));

const TabsList: FC<ITabsProps> = (props) => {
  const classes = useStyles();

  const { tabs, initialValue } = props;
  const [value, setValue] = useState<number>(initialValue);

  const handleChange = (_event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="flex overflow-auto">
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 3,
            borderColor: "divider",
            width: "100%",
            // position: "sticky",
            // top: "0px",
            // zIndex: "3",
          }}
        >
          <Tabs
            value={value}
            TabIndicatorProps={{ sx: props.tabIndicatorSx }}
            onChange={handleChange}
            aria-label="basic tabs example"
            className="bg-[#fff]"
            sx={{
              display: "flex",
              flexDirection: "row",
              ...props.tabsContainerSx,
            }}
          >
            {tabs?.map((tab: any, index: number) => (
              <Tab
                label={tab.title}
                {...a11yProps(index)}
                sx={{
                  flexGrow: "1",
                  maxWidth: "none !important",
                  ...props.tabSx,
                }}
              />
            ))}
          </Tabs>
        </Box>
        <Box
          sx={{
            zIndex: "1",
          }}
        >
          {tabs?.map((tab: any, index: number) => (
            <TabPanel value={value} index={index}>
              {tab.children}
            </TabPanel>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default TabsList;
