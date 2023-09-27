// Electrical
$(document).ready(function () {
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
});
