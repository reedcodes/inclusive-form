$( function () {

  /* ***
   * Popovers, aka tooltips.
   */

  const $popover = $( '[ data-toggle="popover" ]' )
    .popover( { trigger: 'hover focus' } )
    .click( ( e ) => { e.preventDefault(); } );

  $popover.on( 'shown.bs.popover', ( e ) => {
    $( e.currentTarget ).attr( 'aria-expanded', 'true' );
  } );

  $popover.on( 'hidden.bs.popover', ( e ) => {
    $( e.currentTarget ).attr( 'aria-expanded', 'false' );
  } );



  /* ***
   * Functions for country.
   */

  const $countryField = $( '#country' );
  $( $countryField ).autocomplete( { source: countries } );



  /* ***
   * Functions for state.
   */

  const $stateField = $( '#state' );
  $( $stateField ).focus( ( e ) => {
    if( $( '.country' ).val() === 'United States' ) {
      $( $stateField ).autocomplete( { source: states } );
    }
  } );



  /* ***
   * Functions for language.
   */

  const $languageCol = $( '.languages' );
  const $languageField = $( '#language' );

  $languageField.autocomplete( { source: languages } );

  let languageItems = 1;

  const $languageAdd = $( '#language-add' ).click( ( e ) => {
    languageItems++;

    let $languageFieldNew = $languageField
      .last()
      .clone()
      .val( '' )
      .addClass( 'mt-3' )
      .attr( {
        'id': 'language' + languageItems,
        'aria-labelledby': 'language-label'
      } )
      .appendTo( $languageCol )
      .focus()
      .autocomplete( { source: languages } );;
    $languageFieldNew.autocomplete( {
      source: languages
    } );
  } );



  /* ***
   * Functions for race.
   */

  const $raceCol = $( '.races' );
  const $raceField = $( '#race' );

  $raceField.autocomplete( { source: races } );

  let raceItems = 1;

  const $raceAdd = $( '#race-add' ).click( ( e ) => {
    raceItems++;

    let $raceFieldNew = $raceField
      .last()
      .clone()
      .val( '' )
      .addClass( 'mt-3' )
      .attr( {
        'id': 'race' + raceItems,
        'aria-labelledby': 'race-label'
      } )
      .appendTo( $raceCol )
      .focus()
      .autocomplete( { source: races } );;
  } );



  /* ***
   * Functions for gender.
   */

  const $genderCol = $( '.genders' );
  const $genderField = $( '#gender' );

  $genderField.autocomplete( { source: genders } );

  let genderItems = 1;

  const $genderAdd = $( '#gender-add' ).click( ( e ) => {
    genderItems++;

    let $genderFieldNew = $genderField
      .last()
      .clone()
      .val( '' )
      .addClass( 'mt-3' )
      .attr( {
        'id': 'gender' + genderItems,
        'aria-labelledby': 'gender-label'
      } )
      .appendTo( $genderCol )
      .focus()
      .autocomplete( { source: genders } );;
  } );



  /* ***
   * Functions for sexuality.
   */

  const $sexualityCol = $( '.sexualities' );
  const $sexualityField = $( '#sexuality' );

  $sexualityField.autocomplete( { source: sexualities } );

  let sexualityItems = 1;

  const $sexualityAdd = $( '#sexuality-add' ).click( ( e ) => {
    sexualityItems++;

    let $sexualityFieldNew = $sexualityField
      .last()
      .clone()
      .val( '' )
      .addClass( 'mt-3' )
      .attr( {
        'id': 'sexuality' + sexualityItems,
        'aria-labelledby': 'sexuality-label'
      } )
      .appendTo( $sexualityCol )
      .focus()
      .autocomplete( { source: sexualities } );;
  } );



  /* ***
   * Functions for food allergies.
   */

  const $foodAllergyCol = $( '.food-allergies' );
  const $foodAllergyField = $( '#food-allergy' );

  $foodAllergyField.autocomplete( { source: foodAllergies } );

  let foodAllergyItems = 1;

  const $foodAllergyAdd = $( '#food-allergy-add' ).click( ( e ) => {
    foodAllergyItems++;

    let $foodAllergyFieldNew = $foodAllergyField
      .last()
      .clone()
      .val( '' )
      .addClass( 'mt-3' )
      .attr( {
        'id': 'food-allergy' + foodAllergyItems,
        'aria-labelledby': 'food-allergy-label'
      } )
      .appendTo( $foodAllergyCol )
      .focus()
      .autocomplete( { source: foodAllergies } );
  } );



  /* ***
   * Functions for dietary restrictions.
   */

  const $foodDietCol = $( '.food-diets' );
  const $foodDietField = $( '#food-diet' );

  $foodDietField.autocomplete( { source: foodDiets } );

  let foodDietItems = 1;

  const $foodDietAdd = $( '#food-diet-add' ).click( ( e ) => {
    foodDietItems++;

    let $foodDietFieldNew = $foodDietField
      .last()
      .clone()
      .val( '' )
      .addClass( 'mt-3' )
      .attr( {
        'id': 'food-diet' + foodDietItems,
        'aria-labelledby': 'food-diet-label'
      } )
      .appendTo( $foodDietCol )
      .focus()
      .autocomplete( { source: foodDiets } );
  } );

} );
