function doBase64ToImage() {
    $$('canvas').css('background-image', 'url("' + $$('textarea').val() + '")');
}