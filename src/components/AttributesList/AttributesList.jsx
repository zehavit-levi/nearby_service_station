import React, { useEffect, useState } from 'react';
import AttributeSelect from '../AttributeSelect/AttributeSelect';

function AttributesList({selectedAttributes, setSelectedAttributes}) {
  const [acceptsCreditCard, setAcceptsCreditCard] = useState(false);
  const [acceptsCash, setAcceptsCash] = useState(false);
  const [ravkavServices, setRavkavServices] = useState(false);
  const [sellsRavkavReader, setSellsRavkavReader] = useState(false);
  const [manned, setManned] = useState(false);
  const [reloadReservation, setReloadReservation] = useState(false);
 useEffect(()=>{
    const selectedAttributesClone = [...selectedAttributes];
     if(!acceptsCreditCard){
         const index = selectedAttributesClone.indexOf("accepts_credit_card");
         selectedAttributesClone.splice(index,1);
     }else{
         selectedAttributesClone.push("accepts_credit_card");
     }
     setSelectedAttributes(selectedAttributesClone);
 },[acceptsCreditCard]);

 useEffect(()=>{
    const selectedAttributesClone = [...selectedAttributes];
     if(!acceptsCash){
         const index = selectedAttributesClone.indexOf("accepts_cash");
         selectedAttributesClone.splice(index,1);
     }else{
         selectedAttributesClone.push("accepts_cash");
     }
     setSelectedAttributes(selectedAttributesClone);
 },[acceptsCash]);
 useEffect(()=>{
    const selectedAttributesClone = [...selectedAttributes];
     if(!ravkavServices){
         const index = selectedAttributesClone.indexOf("ravkav_services");
         selectedAttributesClone.splice(index,1);
     }else{
         selectedAttributesClone.push("ravkav_services");
     }
     setSelectedAttributes(selectedAttributesClone);
 },[ravkavServices]);
 useEffect(()=>{
    const selectedAttributesClone = [...selectedAttributes];
     if(!sellsRavkavReader){
         const index = selectedAttributesClone.indexOf("sells_ravkav_reader");
         selectedAttributesClone.splice(index,1);
     }else{
         selectedAttributesClone.push("sells_ravkav_reader");
     }
     setSelectedAttributes(selectedAttributesClone);
 },[sellsRavkavReader]);
 useEffect(()=>{
    const selectedAttributesClone = [...selectedAttributes];
     if(!manned){
         const index = selectedAttributesClone.indexOf("manned");
         selectedAttributesClone.splice(index,1);
     }else{
         selectedAttributesClone.push("manned");
     }
     setSelectedAttributes(selectedAttributesClone);
 },[manned]);
 useEffect(()=>{
    const selectedAttributesClone = [...selectedAttributes];
     if(!reloadReservation){
         const index = selectedAttributesClone.indexOf("reload_reservation");
         selectedAttributesClone.splice(index,1);
     }else{
         selectedAttributesClone.push("reload_reservation");
     }
     setSelectedAttributes(selectedAttributesClone);
 },[reloadReservation]);

    return (
        <div className="attributsList">
        <AttributeSelect title="Accepts Credit Card" value={acceptsCreditCard} onChange={setAcceptsCreditCard}/>
        <AttributeSelect title="Accepts Cash" value={acceptsCash} onChange={setAcceptsCash}/>
        <AttributeSelect title="Ravkav Services" value={ravkavServices} onChange={setRavkavServices}/>
        <AttributeSelect title="SellsRavkavReader" value={sellsRavkavReader} onChange={setSellsRavkavReader}/>
        <AttributeSelect title="Manned" value={manned} onChange={setManned}/>
        <AttributeSelect title="ReloadReservation" value={reloadReservation} onChange={setReloadReservation}/>
    </div>
    );
}

export default AttributesList;