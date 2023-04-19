import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import VegClassifierIcon from './VegClassifierIcon'
import { Divider } from '@mui/material';

const AdditionalMenuOptionsModal = ({ id, title, price, itemAttribute, variants, addons, ...props }: any) => {
      console.log(id, title, price, itemAttribute, variants, addons);
      return (
            <Modal
                  {...props}
                  keyboard={true}
                  size="md"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
            >
                  <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter" className='d-flex'>
                              <VegClassifierIcon itemAttribute={itemAttribute} className='mr-3 my-auto' />
                              <span>Customize "{title}"</span>
                        </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                        {variants?.pricingModels &&
                              <div className='ml-3 mb-3'>
                                    <span style={{ fontSize: '15px' }}>Customization Range - </span>
                                    {variants?.pricingModels?.map((pricingModel: any, index: number) => {
                                          let to = '-';
                                          if (variants?.pricingModels?.indexOf(pricingModel) === variants?.pricingModels?.length - 1) {
                                                to = ''
                                          } else {
                                                to = '-';
                                          }
                                          return (
                                                <span key={index} className='text-info'><b>{`₹ ${pricingModel.price / 100}  ${to} `}</b></span>
                                          )
                                    })}
                              </div>}
                        {!variants?.pricingModels &&
                              <div className='ml-3 mb-3'>
                                    <span style={{ fontSize: '15px' }}>Price - </span>
                                    <span className='text-info'><b>{`₹ ${price / 100}`}</b></span>
                              </div>}
                        <Form>
                              {variants?.variantGroups?.map((variantGroup: any) => {
                                    return (
                                          <div key={variantGroup.groupId}>
                                                <Divider textAlign="left" className='mt-2' variant="middle">
                                                      <h5 className='text-danger'>{variantGroup?.name}</h5>
                                                </Divider>
                                                {variantGroup?.variations?.map((variation: any) => {
                                                      return (
                                                            <div className='d-flex align-items-center'>
                                                                  <VegClassifierIcon isVeg={0} />
                                                                  <Form.Check
                                                                        key={variation.id}
                                                                        className='my-3 ml-3'
                                                                        // inline
                                                                        label={`${variation.name}`}
                                                                        name='group-1'
                                                                        type='radio'
                                                                        id={`inline-${variation.id}-1`} />
                                                                  <span className='text-secondary ml-2'>₹ {variation.price}</span>
                                                            </div>
                                                      )
                                                })}
                                                {/* <Divider variant="middle" /> */}
                                          </div>)
                              })}
                              {addons?.map((addon: any) => {
                                    return (
                                          <div key={addon.groupId} className=''>
                                                <Divider textAlign="left" className='mt-2' variant="middle">
                                                      <h5 className='text-danger'>{addon.groupName}</h5>
                                                </Divider>
                                                {addon.choices?.map((choice: any) => {
                                                      return (
                                                            <div className='d-flex align-items-center'>
                                                                  <VegClassifierIcon isVeg={choice.isVeg} />
                                                                  <Form.Check
                                                                        value={choice.price / 100}
                                                                        key={choice.id}
                                                                        className='my-3 ml-3'
                                                                        inline
                                                                        label={choice.name}
                                                                        name='group-2'
                                                                        type='checkbox'
                                                                        id={`inline-${choice.id}-1`} />
                                                                  <span className='text-secondary'>₹ {choice.price / 100}</span>
                                                            </div>
                                                      )
                                                })}
                                                {/* <Divider variant="middle" /> */}
                                          </div>)
                              })}
                        </Form>
                  </Modal.Body>
                  <Modal.Footer>
                        <Button variant="outline-success">Add to cart</Button>
                        <Button variant="outline-danger" onClick={props.onHide}>Close</Button>
                  </Modal.Footer>
            </Modal>
      )
}

export default AdditionalMenuOptionsModal