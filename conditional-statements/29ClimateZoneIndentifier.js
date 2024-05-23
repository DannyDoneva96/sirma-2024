function gussTheClimate(integer, string){

    if( integer==0){return 'Equator'}
     if (string == 'N' || string == 'S'){
        if(integer>0 && integer<23.5){return 'Tropic Zone'}
        else if(integer>=23.5 && integer<=66.5){return 'Temperate Zone'}
        else if(integer>66.5 && integer<90){return 'Arctic Zone'}
     }
    // else if(integer >66.5 && string == 'N' || string == 'S'){return 'Arctic Zone'}
    // else if(integer>=23.5 && integer<=66.5 && string == 'N' || string == 'S')
}
// not sure if this one is correct!!