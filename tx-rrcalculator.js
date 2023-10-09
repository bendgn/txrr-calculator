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

  // Landscaping Project
  // Function to calculate the total landscaping/pools cost
  function calculateTotalLandscapingPools() {
    // Get the values from the input elements and checkboxes
    var replaceBackFlowBellValue = $(
      "#replaceLeakingBackFlowBellOnIrrigationSystem"
    ).is(":checked")
      ? 160
      : 0;
    var sprinklerHeadRepairValue = $("#sprinklerHeadRepair").is(":checked")
      ? 45
      : 0;
    var shuttersValue = $("#shutters").is(":checked") ? 160 : 0;

    // Get the values from the number input elements with minimum requirements
    var hardScapeInstallationValue =
      parseFloat($("#hardScapeInstallation").val()) || 0;
    var fenceWeatherProtectStainSealValue = $(
      "#fenceWeatherProtectStainSeal"
    ).is(":checked")
      ? 1.2
      : 0;
    var deckWeatherProtectStainSealValue =
      parseFloat($("#deckWeatherProtectStainSeal").val()) || 0;
    var replaceFencePicketsValue =
      parseFloat($("#replaceFencePickets").val()) || 0;

    // Calculate the total landscaping/pools cost
    var totalLandscapingPools = (
      replaceBackFlowBellValue +
      sprinklerHeadRepairValue +
      shuttersValue +
      hardScapeInstallationValue * 4 +
      fenceWeatherProtectStainSealValue +
      deckWeatherProtectStainSealValue * 2.5 +
      replaceFencePicketsValue * 15
    ).toFixed(2);

    // Update the total in the landscapingPoolsTotal input
    $("#lanscapingPoolsTotal").val(totalLandscapingPools);
  }

  // Attach an event listener to each input and checkbox to recalculate the total when they change
  $('.form-calculator, input[type="checkbox"]').on(
    "input change",
    calculateTotalLandscapingPools
  );

  // Initialize the total on page load
  calculateTotalLandscapingPools();

  // End of Landscaping Project

  // Home Hardware Project
  function calculateTotalHomeHardware() {
    // Get the values from the input elements and checkboxes
    var exchangeExistingInteriorDoorHardwareValue = $(
      "#exchangeExistingInteriorDoorHardware"
    ).is(":checked")
      ? 25
      : 0;
    var exchangeExistingInteriorExteriorDoorHingesValue = $(
      "#exchangeExistingInteriorExteriorDoorHinges"
    ).is(":checked")
      ? 25
      : 0;
    var exchangeExistingExteriorDoorHardwareValue = $(
      "#exchangeExistingExteriorDoorHardware"
    ).is(":checked")
      ? 75
      : 0;
    var exchangeInstallWindowBlindsValue = $("#exchangeInstallWindowBlinds").is(
      ":checked"
    )
      ? 50
      : 0;
    var installCurtainRodAndMountHardwareValue = $(
      "#installCurtainRodAndMountHardware"
    ).is(":checked")
      ? 50
      : 0;

    // Get the selected value from the grab bar dropdown
    var installGrabBarShowerBathTubValue =
      parseFloat($("#installGrabBarShowerBathTub").val()) || 0;

    // Calculate the total Home Hardware cost
    var totalHomeHardware = (
      exchangeExistingInteriorDoorHardwareValue +
      exchangeExistingInteriorExteriorDoorHingesValue +
      exchangeExistingExteriorDoorHardwareValue +
      exchangeInstallWindowBlindsValue +
      installCurtainRodAndMountHardwareValue +
      installGrabBarShowerBathTubValue
    ).toFixed(2);

    // Update the total in the homeHardwareTotal input
    $("#homeHardwareTotal").val(totalHomeHardware);
  }

  // Attach an event listener to each input, checkbox, and select to recalculate the total when they change
  $('.form-calculator, input[type="checkbox"], select').on(
    "input change",
    calculateTotalHomeHardware
  );

  // Initialize the total on page load
  calculateTotalHomeHardware();
  // End of Home Hardware Project

  // Exterior / Roof / Windows / Siding project
  function calculateTotalExteriorRoofWindowsSiding() {
    // Get the values from the number input elements and checkboxes
    var fasciaValue = parseFloat($("#fascia").val()) || 0;
    var fasciaWithTrimValue = parseFloat($("#fasciaWithTrim").val()) || 0;
    var soffitValue = parseFloat($("#soffit").val()) || 0;
    var deckingValue = parseFloat($("#decking").val()) || 0;
    var yr30ShinglesValue = parseFloat($("#30YrShingles").val()) || 0;

    var sealVentsAndNailPopsAndChimneyForVentsValue =
      parseFloat($("#sealVentsAndNailPopsAndChimneyForVents").val()) || 0;
    var sealVentsAndNailPopsAndChimneyForNailPopsValue =
      parseFloat($("#sealVentsAndNailPopsAndChimneyForNailPops").val()) || 0;
    var sealVentsAndNailPopsAndChimneyForChimneyValue =
      parseFloat($("#sealVentsAndNailPopsAndChimneyForChimney").val()) || 0;

    var cleanGuttersValue = parseFloat($("#cleanGutters").val()) || 0;
    var singleWindowsValue = $("#singleWindows").is(":checked") ? 500 : 0;
    var replaceNonOpeningWindowGlassValue =
      parseFloat($("#replaceNonOpeningWindowGlass").val()) || 0;
    var demoExistingSidingAndReplaceWithHardieSidingValue = $(
      "#demoExistingSidingAndReplaceWithHardieSiding"
    ).is(":checked")
      ? 12
      : 0;
    var exteriorPaintValue = $("#exteriorPaint").is(":checked") ? 3.5 : 0;
    var woodRotRepairValue = parseFloat($("#woodRotRepair").val()) || 0;
    var plywoodRepairValue = parseFloat($("#plywoodRepair").val()) || 0;
    var caulkWindowsValue = parseFloat($("#caulkWindows").val()) || 0;

    // Calculate the total Exterior / Roof / Windows / Siding cost
    var totalExteriorRoofWindowsSiding = (
      fasciaValue * 5 +
      fasciaWithTrimValue * 6 +
      soffitValue * 5 +
      deckingValue * 4 +
      yr30ShinglesValue * 12 +
      sealVentsAndNailPopsAndChimneyForVentsValue * 40 +
      sealVentsAndNailPopsAndChimneyForNailPopsValue * 6 +
      sealVentsAndNailPopsAndChimneyForChimneyValue * 60 +
      cleanGuttersValue * 1 +
      singleWindowsValue +
      replaceNonOpeningWindowGlassValue +
      demoExistingSidingAndReplaceWithHardieSidingValue +
      exteriorPaintValue +
      woodRotRepairValue * 10 +
      plywoodRepairValue * 2.5 +
      caulkWindowsValue * 2
    ).toFixed(2);

    // Update the total in the exteriorRoofWindowsSidingTotal input
    $("#exteriorRoofWindowsSidingTotal").val(totalExteriorRoofWindowsSiding);
  }

  // Attach an event listener to each input and checkbox to recalculate the total when they change
  $('.form-calculator, input[type="checkbox"], select').on(
    "input change",
    calculateTotalExteriorRoofWindowsSiding
  );

  // Initialize the total on page load
  calculateTotalExteriorRoofWindowsSiding();

  // End of Exterior / Roof / Windows / Siding project
}); // end of jquery
