function compute(){
  //fixed values
  tMatCost = document.getElementById('tMatCost').innerHTML;
  tLabCost = document.getElementById('tLabCost').innerHTML;
  tCost = document.getElementById('tCost').innerHTML;

  //vatInc labels
  status = document.getElementById('status').value;
  fixedAmount = document.getElementById('fixedAmount').value;
  qpStatus = document.getElementById('qpStatus').value;
  vatPrize = document.getElementById('vatPrize').value;
  ewt = document.getElementById('ewt').value;
  ewt = ewt / 100;
  discount = document.getElementById('discount').value;
  discount = discount / 100;
  discount1 = document.getElementById('discount1').value;
  discount2 = document.getElementById('discount2').value;


  if(status == "vat"){
    //totalcost vat Inc
    document.getElementById("changeStatus").innerHTML = "VAT Registered";
    //less order discount applied on vatInc
    if(qpStatus == "vatInc" && vatPrize == "vatIncPrize"){
      var lessMat = "";
      var lessLab = "";

      if(discount1 == "material" || discount1 == "total"){
        lessMat = tMatCost * discount;
      }else{
        lessMat = 0;
      }

      if(discount1 == "labor" || discount1 == "total"){
        lessLab = tLabCost * discount;
      }else{
        lessLab = 0;
      }

      if(discount2 == "material"){
        lessMat = parseFloat(lessMat) + parseFloat(fixedAmount);
      }else{
        lessLab = parseFloat(lessLab) + parseFloat(fixedAmount);
      }
      document.getElementById('orderDiscountVatIncMat').innerHTML = parseFloat(lessMat).toFixed(2);
      document.getElementById('orderDiscountVatIncLab').innerHTML = parseFloat(lessLab).toFixed(2);
      document.getElementById('orderDiscountVatIncTot').innerHTML = lessMat + lessLab;
    }else{
      document.getElementById('orderDiscountVatIncMat').innerHTML = 0;
      document.getElementById('orderDiscountVatIncLab').innerHTML = 0;
      document.getElementById('orderDiscountVatIncTot').innerHTML = 0;
    }


    if(qpStatus == "vatInc"){
      document.getElementById('tMatCostComp').innerHTML = tMatCost;
      document.getElementById('tLabCostComp').innerHTML = tLabCost;
      document.getElementById('tCostComp'). innerHTML = parseFloat(tMatCost) + parseFloat(tLabCost);

      if(vatPrize == "vatIncPrize"){
        document.getElementById('lessVatMat').innerHTML = ((parseFloat(tMatCost) - parseFloat(lessMat)) * .12).toFixed(2);
        document.getElementById('lessVatLab').innerHTML = ((parseFloat(tLabCost) - parseFloat(lessLab)) * .12).toFixed(2);
        document.getElementById('lessVatTot').innerHTML = (parseFloat(document.getElementById('lessVatMat').innerHTML) + parseFloat(document.getElementById('lessVatLab').innerHTML)).toFixed(2);


        document.getElementById('tMatCostEx').innerHTML = (tMatCost - lessMat - (parseFloat(document.getElementById('lessVatMat').innerHTML))).toFixed(2);
        document.getElementById('tLabCostEx').innerHTML = (tLabCost - lessLab - (parseFloat(document.getElementById('lessVatLab').innerHTML))).toFixed(2);
        document.getElementById('tCostEx').innerHTML = (parseFloat(document.getElementById('tMatCostEx').innerHTML) + (parseFloat(document.getElementById('tLabCostEx').innerHTML)));
      }else{
        document.getElementById('lessVatMat').innerHTML = (parseFloat(tMatCost) * .12).toFixed(2);
        document.getElementById('lessVatLab').innerHTML = (parseFloat(tLabCost) * .12).toFixed(2);
        document.getElementById('lessVatTot').innerHTML = (parseFloat(document.getElementById('lessVatMat').innerHTML) + parseFloat(document.getElementById('lessVatLab').innerHTML)).toFixed(2);


        document.getElementById('tMatCostEx').innerHTML = (tMatCost - (parseFloat(document.getElementById('lessVatMat').innerHTML))).toFixed(2);
        document.getElementById('tLabCostEx').innerHTML = (tLabCost - (parseFloat(document.getElementById('lessVatLab').innerHTML))).toFixed(2);
        document.getElementById('tCostEx').innerHTML = (parseFloat(document.getElementById('tMatCostEx').innerHTML) + (parseFloat(document.getElementById('tLabCostEx').innerHTML)));
      }
    }else{
      document.getElementById('tMatCostComp').innerHTML = 0;
      document.getElementById('tLabCostComp').innerHTML = 0;
      document.getElementById('tCostComp'). innerHTML = 0;

      document.getElementById('lessVatMat').innerHTML = 0;
      document.getElementById('lessVatLab').innerHTML = 0;
      document.getElementById('lessVatTot').innerHTML = 0;

      document.getElementById('tMatCostEx').innerHTML = tMatCost;
      document.getElementById('tLabCostEx').innerHTML = tLabCost;
      document.getElementById('tCostEx'). innerHTML = parseFloat(tMatCost) + parseFloat(tLabCost);

    }

    //less order discount applied on vatex
  }else{
    document.getElementById("changeStatus").innerHTML = "Non-VAT Registered";

    document.getElementById('tMatCostComp').innerHTML = 0;
    document.getElementById('tLabCostComp').innerHTML = 0;
    document.getElementById('tCostComp').innerHTML = 0;

    document.getElementById('orderDiscountVatIncMat').innerHTML = 0;
    document.getElementById('orderDiscountVatIncLab').innerHTML = 0;
    document.getElementById('orderDiscountVatIncTot').innerHTML = 0;

    document.getElementById('lessVatMat').innerHTML = 0;
    document.getElementById('lessVatLab').innerHTML = 0;
    document.getElementById('lessVatTot').innerHTML = 0;

    document.getElementById('tMatCostEx').innerHTML = tMatCost;
    document.getElementById('tLabCostEx').innerHTML = tLabCost;
    document.getElementById('tCostEx'). innerHTML = parseFloat(tMatCost) + parseFloat(tLabCost);
  }

  //always perfomed
  if(vatPrize == "vatExPrize"){
    if(qpStatus == "vatInc"){
      var lessMat = "";
      var lessLab = "";
      lessVatMat = document.getElementById('lessVatMat').innerHTML;
      lessVatLab = document.getElementById('lessVatLab').innerHTML;

      if(discount1 == "material" || discount1 == "total"){
        lessMat = tMatCost - lessVatMat;
        lessMat = lessMat *discount;
      }else{
        lessMat = 0;
      }

      if(discount1 == "labor" || discount1 == "total"){
        lessLab = tLabCost - lessVatLab;
        lessLab = lessLab *discount;
      }else{
        lessLab = 0;
      }

      if(discount2 == "material"){
        lessMat = parseFloat(lessMat) + parseFloat(fixedAmount);
      }else{
        lessLab = parseFloat(lessLab) + parseFloat(fixedAmount);
      }
      document.getElementById('discMatEx').innerHTML = lessMat;
      document.getElementById('discLabEx').innerHTML = lessLab;
      document.getElementById('discTotEx').innerHTML = lessMat + lessLab;
    }else{ //if VatEX

      if(discount1 == "material" || discount1 == "total"){
        lessMat = tMatCost
        lessMat = lessMat *discount;
      }else{
        lessMat = 0;
      }

      if(discount1 == "labor" || discount1 == "total"){
        lessLab = tLabCost
        lessLab = lessLab * discount;
      }else{
        lessLab = 0;
      }

      if(discount2 == "material"){
        lessMat = parseFloat(lessMat) + parseFloat(fixedAmount);
      }else{
        lessLab = parseFloat(lessLab) + parseFloat(fixedAmount);
      }
      document.getElementById('discMatEx').innerHTML = lessMat;
      document.getElementById('discLabEx').innerHTML = lessLab;
      document.getElementById('discTotEx').innerHTML = lessMat + lessLab;
    }
  }else{
    document.getElementById('discMatEx').innerHTML = 0;
    document.getElementById('discLabEx').innerHTML = 0;
    document.getElementById('discTotEx').innerHTML = 0;
  }

  if(qpStatus == "vatInc"){
    document.getElementById('changeVatInc1').innerHTML = "(VATInc)";
    document.getElementById('changeVatInc2').innerHTML = "(VATInc)";
    document.getElementById('changeVatInc3').innerHTML = "(VATInc)";
  }else{
    document.getElementById('changeVatInc1').innerHTML = "(VATEx)";
    document.getElementById('changeVatInc2').innerHTML = "(VATEx)";
    document.getElementById('changeVatInc3').innerHTML = "(VATEx)";
  }

  totalDiscountMatVatEx = 0;
  totalDiscountLabVatEx = 0;
  if(qpStatus == "vatInc"){
    totalDiscountMatVatEx = document.getElementById("tMatCost").innerHTML;
    totalDiscountLabVatEx = document.getElementById("tLabCost").innerHTML;
  }else{
    totalDiscountMatVatEx = document.getElementById("tMatCostEx").innerHTML;
    totalDiscountLabVatEx = document.getElementById("tLabCostEx").innerHTML;
  }
  a = document.getElementById('orderDiscountVatIncMat').innerHTML;
  b = document.getElementById('lessVatMat').innerHTML;
  c = document.getElementById('discMatEx').innerHTML;
  totalDiscountMatVatEx = totalDiscountMatVatEx - a - b - parseFloat(c);
  document.getElementById('totalDiscountMatVatEx').innerHTML = parseFloat(totalDiscountMatVatEx).toFixed(2);

  a = document.getElementById('orderDiscountVatIncLab').innerHTML;
  b = document.getElementById('lessVatLab').innerHTML;
  c = document.getElementById('discLabEx').innerHTML;
  totalDiscountLabVatEx = totalDiscountLabVatEx - a - b - parseFloat(c);
  document.getElementById('totalDiscountLabVatEx').innerHTML = parseFloat(totalDiscountLabVatEx).toFixed(2);

  document.getElementById('totalDiscountVatEx').innerHTML = parseFloat(totalDiscountMatVatEx + totalDiscountLabVatEx).toFixed(2);

  if(status == "vat"){
    document.getElementById('addVatMat').innerHTML = parseFloat(totalDiscountMatVatEx * .12).toFixed(2);
    document.getElementById('addVatLab').innerHTML = parseFloat(totalDiscountLabVatEx * .12).toFixed(2);
    document.getElementById('addVatTot').innerHTML = parseFloat(parseFloat(document.getElementById('addVatMat').innerHTML) + parseFloat(document.getElementById('addVatLab').innerHTML)).toFixed(2);
  }else{
    document.getElementById('addVatMat').innerHTML = 0;
    document.getElementById('addVatLab').innerHTML = 0;
    document.getElementById('addVatTot').innerHTML = 0;
  }

  document.getElementById('ewtLab').innerHTML = totalDiscountLabVatEx * parseFloat(ewt);
  document.getElementById('ewtTot').innerHTML = totalDiscountLabVatEx * parseFloat(ewt);

  totalCost = document.getElementById('totalDiscountVatEx').innerHTML;
  totalCost = parseFloat(totalCost) + parseFloat(document.getElementById('addVatTot').innerHTML);
  // console.log(totalCost);
  totalCost = parseFloat(totalCost) - parseFloat(document.getElementById('ewtTot').innerHTML);
  totalCost = parseFloat(totalCost) + parseFloat(document.getElementById('shipment').innerHTML);
  document.getElementById('totalCost').innerHTML = "P " + totalCost;
};
