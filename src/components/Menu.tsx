import { ToggleSlider } from "react-toggle-slider";
import { Col, Row } from 'react-bootstrap';
import MenuItems from '../shared/MenuItems';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
      AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import React from "react";

const Accordion = styled((props: AccordionProps) => (
      <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
      border: `1px solid ${theme.palette.divider}`,
      // '&:not(:last-child)': {
      //       borderBottom: 0,
      // },
      '&:before': {
            display: 'none',
      },
      borderRadius: 5
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
      <MuiAccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
            {...props}
      />
))(({ theme }) => ({
      backgroundColor:
            theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, .05)'
                  : 'rgba(0, 0, 0, .03)',
      flexDirection: 'row-reverse',
      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
      },
      '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
      },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
      padding: theme.spacing(2),
      borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
export default function Menu({ menuCategory }: any) {
      const [expanded, setExpanded] = React.useState<string | false>('Recommended');

      const handleChange =
            (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
                  setExpanded(newExpanded ? panel : false);
            };
      return (
            <Row style={{ width: '100%' }}>
                  <Col xs={12} className='d-flex align-items-center pb-4'>
                        <span className='mr-3'><b>VEG ONLY</b></span>
                        <ToggleSlider
                              handleBorderRadius={4}
                              barBorderRadius={4}
                              handleSize={22}
                              barWidth={40}
                              padding={0}
                              barBackgroundColor={'#F34B58'}
                              handleBackgroundColor={'#cccccc'}
                              barBackgroundColorActive={'#07B278'}
                              barHeight={18} />
                  </Col>
                  <Col xs={12}>
                        <div>
                              {menuCategory?.cards?.map((menuItems: any, index: number) => {
                                    return (
                                          <Accordion key={index} className="mb-3" expanded={expanded === menuItems?.card?.card?.title} onChange={handleChange(menuItems?.card?.card?.title)}>
                                                <AccordionSummary id={menuItems?.card?.card?.title}>
                                                      <Typography>{menuItems?.card?.card?.title}</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                      {menuItems?.card?.card?.itemCards?.map((menuCategoryItem: any, index: number) => {
                                                            return (
                                                                  <MenuItems key={index} menuItems={menuCategoryItem} />
                                                            )
                                                      })}
                                                </AccordionDetails>
                                          </Accordion>
                                    )
                              })
                              }
                        </div>
                  </Col>
            </Row>
      );
}