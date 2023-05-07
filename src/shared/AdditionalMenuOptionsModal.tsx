import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import VegClassifierIcon from './VegClassifierIcon'
import { Divider } from '@mui/material';
import { useForm } from 'react-hook-form';

const AdditionalMenuOptionsModal = ({ id, title, price, itemAttribute, variants, addons, ...props }: any) => {
      // console.log(id, title, price, itemAttribute, variants, addons);
      const [currentFoodItemInfo, setcurrentFoodItemInfo] = useState<any>({});
      const {
            register,
            handleSubmit,
            formState: { errors },
      } = useForm();
      const submitHandler = (data: any) => {
            setcurrentFoodItemInfo((prev: any) => {
                  return {
                        ...prev,
                        id: id,
                        title: title,
                        price: price ? data?.choices ? (price / 100 + data?.choices?.map((data: string) => parseInt(data)).reduce((x: number, y: number) => x + y, 0))
                              : parseInt(data?.variations)
                              : (data?.choices?.length && data?.variations) ? parseInt(data?.variations) + data?.choices?.map((data: string) => parseInt(data)).reduce((x: number, y: number) => x + y, 0)
                                    : parseInt(data?.variations),
                        itemAttribute: itemAttribute,
                  }

            })
            console.log(data?.choices?.map((data: string) => parseInt(data)).reduce((x: number, y: number) => x + y, 0));
            console.log(data);
            console.log(currentFoodItemInfo);
      };
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
                        <Form onSubmit={handleSubmit(submitHandler)}>
                              {variants?.variantGroups?.map((variantGroup: any) => {
                                    return (
                                          <div key={variantGroup.groupId}>
                                                <Divider textAlign="left" className='mt-2' variant="middle">
                                                      <h5 className='text-danger'>{variantGroup?.name}</h5>
                                                </Divider>
                                                {variantGroup?.variations?.map((variation: any) => {
                                                      return (
                                                            <div key={variation.id} className='d-flex align-items-center'>
                                                                  <VegClassifierIcon isVeg={0} />
                                                                  <Form.Check
                                                                        value={variation.price}
                                                                        className='my-3 ml-3'
                                                                        // inline
                                                                        label={`${variation.name}`}
                                                                        // name='variations'
                                                                        type='radio'
                                                                        id={`${variation.id}`}
                                                                        {...register("variations")} />
                                                                  <span className='text-secondary ml-2'>₹ {variation.price}</span>
                                                            </div>
                                                      )
                                                })}
                                                {/* <Divider variant="middle" /> */}
                                          </div>)
                              })}
                              {addons && addons?.map((addon: any) => {
                                    return (
                                          <div key={addon.groupId} className=''>
                                                <Divider textAlign="left" className='mt-2' variant="middle">
                                                      <h5 className='text-danger'>{addon.groupName}</h5>
                                                </Divider>
                                                {addon?.choices?.map((choice: any) => {
                                                      return (
                                                            <div key={choice.id} className='d-flex align-items-center'>
                                                                  <VegClassifierIcon isVeg={choice.isVeg} />
                                                                  <Form.Check
                                                                        value={choice.price / 100}
                                                                        className='my-3 ml-3'
                                                                        inline
                                                                        label={choice.name}
                                                                        // name='choices'
                                                                        type='checkbox'
                                                                        id={`${choice.id}`}
                                                                        {...register("choices")} />
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
                        <Button type='submit' onClick={handleSubmit(submitHandler)} variant="outline-success">Add to cart</Button>
                        <Button variant="outline-danger" onClick={props.onHide}>Close</Button>
                  </Modal.Footer>
            </Modal>
      )
}

export default AdditionalMenuOptionsModal