$(document).ready(function () {
  // Electrical
  // Function to calculate the total electrical cost
  function calculateTotalElectrical() {
    // Get the values from the input elements and checkboxes
    var outletsValue = parseFloat($("#outlets").val()) || 0;
    var outletsGfciValue = parseFloat($("#outletsGfci").val()) || 0;
    var switchesValue = parseFloat($("#switches").val()) || 0;
    var installStandardDoorbellValue = $("#installStandardDoorbell").is(
      ":checked"
    )
      ? 50
      : 0;
    var installVideoDoorbellValue = $("#installVideoDoorbell").is(":checked")
      ? 125
      : 0;
    var ceillingFanValue = $("#ceillingFan").is(":checked") ? 175 : 0;
    var interiorLightFixtureValue = $("#interiorLightFixture").is(":checked")
      ? 80
      : 0;
    var lightConversionValue = $("#lightConversion").is(":checked") ? 20 : 0;
    var removeReplaceExistingLightValue = $("#removeReplaceExistingLight").is(
      ":checked"
    )
      ? 100
      : 0;
    var exteriorLightFixtureLowValue = $("#exteriorLightFixtureLow").is(
      ":checked"
    )
      ? 85
      : 0;
    var exteriorLightFixtureHighValue = $("#exteriorLightFixtureHigh").is(
      ":checked"
    )
      ? 135
      : 0;
    var mountBracketInstallTvValue = $("#mountBracketInstallTv").is(":checked")
      ? 150
      : 0;
    var chandelierValue = $("#chandelier").is(":checked") ? 175 : 0;

    // Calculate the total electrical cost
    var totalElecrtical = (
      outletsValue * 35 + // 35 is the base value for outletsValue
      outletsGfciValue * 35 + // 35 is the base value for outletsGfciValue
      switchesValue * 40 + // 40 is the base value for switchesValue
      installStandardDoorbellValue +
      installVideoDoorbellValue +
      ceillingFanValue +
      interiorLightFixtureValue +
      lightConversionValue +
      removeReplaceExistingLightValue +
      exteriorLightFixtureLowValue +
      exteriorLightFixtureHighValue +
      mountBracketInstallTvValue +
      chandelierValue
    ).toFixed(2);

    // Update the total in the electricTotal input
    $("#electricTotal").val(totalElecrtical);
  }

  // Attach an event listener to each input and checkbox to recalculate the total when they change
  $('.form-calculator, input[type="checkbox"]').on(
    "input change",
    calculateTotalElectrical
  );

  // Initialize the total on page load
  calculateTotalElectrical();
  // End of Electrical

  // Plumbing
  // Function to calculate the total plumbing cost
  function calculateTotalPlumbing() {
    // Get the values from the input elements and checkboxes
    var waterHeaterFirstFloorValue = $("#waterHeaterFirstFloor").is(":checked")
      ? 400
      : 0;
    var waterHeaterAttickValue = $("#waterHeaterAttick").is(":checked")
      ? 600
      : 0;
    var toiletFlangeAndOrWaxRingValue = $("#toiletFlangeAndOrWaxRing").is(
      ":checked"
    )
      ? 150
      : 0;
    var toiletFirstFloorValue = $("#toiletFirstFloor").is(":checked") ? 150 : 0;
    var toiletSecondFloorValue = $("#toiletSecondFloor").is(":checked")
      ? 200
      : 0;
    var toiletWaterHeaterDisposalValue = $("#toiletWaterHeaterDisposal").is(
      ":checked"
    )
      ? 75
      : 0;
    var exchangeToiletFlushKitValue = $("#exchangeToiletFlushKit").is(
      ":checked"
    )
      ? 100
      : 0;
    var flushACDrainLineValue = $("#flushACDrainLine").is(":checked") ? 150 : 0;
    var flushWaterHeaterValue = $("#flushWaterHeater").is(":checked") ? 150 : 0;
    var kitchenFaucetAssemblyValue = $("#kitchenFaucetAssembly").is(":checked")
      ? 150
      : 0;
    var bathroomFaucetAssemblyValue = $("#bathroomFaucetAssembly").is(
      ":checked"
    )
      ? 125
      : 0;
    var garbageDisposalValue = $("#garbageDisposal").is(":checked") ? 115 : 0;
    var dishwasherValue = $("#dishwasher").is(":checked") ? 150 : 0;
    var underKitchenSinkDrainLineLeakRepairValue = $(
      "#underKitchenSinkDrainLineLeakRepair"
    ).is(":checked")
      ? 150
      : 0;
    var underBathroomSinkDrainLineLeakRepairValue = $(
      "#underBathroomSinkDrainLineLeakRepair"
    ).is(":checked")
      ? 150
      : 0;

    // Get the values from the number input elements with minimum requirements
    var pressureWashValue =
      parseFloat($("#pressureWashDriveWalkWaysPatios").val()) || 0;
    var shutOffValvesValue =
      parseFloat($("#replaShutOffValvesInteriorForSinkToiletsEtc").val()) || 0;

    // Calculate the total plumbing cost
    var totalPlumbing = (
      waterHeaterFirstFloorValue +
      waterHeaterAttickValue +
      toiletFlangeAndOrWaxRingValue +
      toiletFirstFloorValue +
      toiletSecondFloorValue +
      toiletWaterHeaterDisposalValue +
      exchangeToiletFlushKitValue +
      flushACDrainLineValue +
      flushWaterHeaterValue +
      kitchenFaucetAssemblyValue +
      bathroomFaucetAssemblyValue +
      garbageDisposalValue +
      dishwasherValue +
      underKitchenSinkDrainLineLeakRepairValue +
      underBathroomSinkDrainLineLeakRepairValue +
      pressureWashValue * 0.3 +
      shutOffValvesValue * 30
    ).toFixed(2);

    // Update the total in the plumbingTotal input
    $("#plumbingTotal").val(totalPlumbing);
  }

  // Attach an event listener to each input and checkbox to recalculate the total when they change
  $('.form-calculator, input[type="checkbox"]').on(
    "input change",
    calculateTotalPlumbing
  );

  // Initialize the total on page load
  calculateTotalPlumbing();
  // End of Plumbing

  // HVAC
  // Function to calculate the total HVAC cost
  function calculateTotalHVAC() {
    // Get the values from the input elements and checkboxes
    var replaceAirReturnValue = $("#replaceAirReturnWithNewReturn").is(
      ":checked"
    )
      ? 120
      : 0;
    var changeThermostatValue = $("#changeThermostat").is(":checked") ? 125 : 0;

    // Get the value from the number input element with minimum requirement
    var cleanPaintCaulkAirVentValue =
      parseFloat($("#cleanPaintCaulkAirVent").val()) || 0;

    // Calculate the total HVAC cost
    var totalHVAC = (
      replaceAirReturnValue +
      changeThermostatValue +
      cleanPaintCaulkAirVentValue * 30
    ).toFixed(2);

    // Update the total in the HVACTotal input
    $("#HVACTotal").val(totalHVAC);
  }

  // Attach an event listener to each input and checkbox to recalculate the total when they change
  $('.form-calculator, input[type="checkbox"]').on(
    "input change",
    calculateTotalHVAC
  );

  // Initialize the total on page load
  calculateTotalHVAC();
  // End of HVAC

  // Flooring
  // Function to calculate the total Flooring cost
  function calculateTotalFlooring() {
    // Get the values from the input elements and checkboxes
    var laminateFlooringValue = $("#laminateFlooring").is(":checked") ? 3 : 0;

    // Get the value from the number input element for tile flooring
    var tileFlooringValue = parseFloat($("#tileFlooring").val()) || 0;

    // Calculate the total Flooring cost as tileFlooring * 1000 + laminateFlooringValue
    var totalFlooring = (
      tileFlooringValue * 5.5 +
      laminateFlooringValue
    ).toFixed(2);

    // Update the total in the flooringTotal input
    $("#flooringTotal").val(totalFlooring);
  }

  // Attach an event listener to each input and checkbox to recalculate the total when they change
  $('.form-calculator, input[type="checkbox"], #tileFlooring').on(
    "input change",
    calculateTotalFlooring
  );

  // Initialize the total on page load
  calculateTotalFlooring();

  // End of Flooring

  // Doors Project
  // Function to calculate the total Doors project cost
  function calculateTotalDoors() {
    // Get the values from the input elements and checkboxes
    var closetRodValue = $("#closetRod").is(":checked") ? 30 : 0;
    var exteriorSinglePreHungDoorValue = $("#exteriorSinglePreHungDoor").is(
      ":checked"
    )
      ? 450
      : 0;
    var exteriorPreHungDoubleDoorsValue = $("#exteriorPreHungDoubleDoors").is(
      ":checked"
    )
      ? 900
      : 0;
    var stainExteriorDoorValue = $("#stainExteriorDoor").is(":checked")
      ? 200
      : 0;
    var frontDoorHandleValue = $("#frontDoorHandle").is(":checked") ? 45 : 0;
    var slidingDoorInteriorValue = $("#slidingDoorInterior").is(":checked")
      ? 800
      : 0;
    var frenchDoorInteriorValue = $("#frenchDoorInterior").is(":checked")
      ? 300
      : 0;
    var interiorPreHungDoorValue = $("#interiorPreHungDoor").is(":checked")
      ? 150
      : 0;
    var interiorDoorStopsValue = $("#interiorDoorStops").is(":checked") ? 5 : 0;
    var biFoldDoorsValue = $("#biFoldDoors").is(":checked") ? 100 : 0;
    var replaceAtticDoorValue = $("#replaceAtticDoor").is(":checked") ? 300 : 0;
    var slidingClosetDoorsValue = $("#slidingClosetDoors").is(":checked")
      ? 200
      : 0;

    // Calculate the total Doors project cost
    var totalDoors = (
      closetRodValue +
      exteriorSinglePreHungDoorValue +
      exteriorPreHungDoubleDoorsValue +
      stainExteriorDoorValue +
      frontDoorHandleValue +
      slidingDoorInteriorValue +
      frenchDoorInteriorValue +
      interiorPreHungDoorValue +
      interiorDoorStopsValue +
      biFoldDoorsValue +
      replaceAtticDoorValue +
      slidingClosetDoorsValue
    ).toFixed(2);

    // Update the total in the doorsTotal input
    $("#doorsTotal").val(totalDoors);
  }

  // Attach an event listener to each input and checkbox to recalculate the total when they change
  $('.form-calculator, input[type="checkbox"]').on(
    "input change",
    calculateTotalDoors
  );

  // Initialize the total on page load
  calculateTotalDoors();
  //end of Doors
}); // end of jquery
