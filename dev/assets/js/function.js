$(document).ready(function(){
    // product slide
    $('.slider--product.big').slick({
        arrows : false,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
    });

    $('.slider--product.small').slick({
        arrows : false,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '45px',
        slidesToShow: 2
    });

    // mart info slide
    $('.slider--mart-info').slick({
        arrows : false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots : true
    });

    // mart info tab
    $('.mart-info__tab .tab__link').on('click', function(){
        var activeTab = $(this).attr('data-tab');

        $('.mart-info__tab .tab__link').removeClass('active');
        $('.mart-info__tab .tab__item').removeClass('active');
        $(this).addClass('active');
        $('#' + activeTab).addClass('active');
    });

    // 현재 날짜
    if(!!document.getElementById('currentDate')) {
        document.getElementById('currentDate').value = new Date().toISOString().substring(0, 10);
    }
    if(!!document.getElementById('currentDate2')) {
        document.getElementById('currentDate2').value = new Date().toISOString().substring(0, 10);
    }

    // file upload
    var fileTarget = $('.file-upload');

    fileTarget.on('change', function(){
        var cur = $(".inp-file input[type='file']").val();
        $('.upload-name').text(cur);
    });


    $(".js-range-slider").ionRangeSlider({
        skin: "round",
        min: 10,
        max: 2000,
        postfix: 'm',
        onChange: function(val){
            setArea(val.from);
        }
    });

    $('.inp-checkbox2 [name="star"]').on('click', function(){
        var value = $(this).val();
        console.log(value);
        $('.inp-checkbox2 span').removeClass('active');
        for(var i = 0; i < parseInt(value, 10); i++) {
            $('.inp-checkbox2 label').eq(i).find('span').addClass('active');
        }
    });

    $('.review-details__btnBox .btn-like').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });

    $('.btn-share').on('click', function(e){
        e.preventDefault();
        $('#shareModal').css('display', 'flex');
    });
    $('.modal .btn-close').on('click', function(e){
        e.preventDefault();
        $('.modal').hide();
    });
    $('.mart-info .btn-like').add('.review__notification').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });
    $('.modal .modal__btn').on('click', function(e){
        e.preventDefault();
        $('.modal').hide();
    });

    
    $('.popup-bg').on('click', function(e){
        e.preventDefault();
        $('.popup-wrapper').hide();
    });
    $('.popup__btnBox .cancel').on('click', function(e){
        e.preventDefault();
        $('.popup-wrapper').hide();
    });


    $('.cs__tabBox .cs__tabLink').on('click', function(){
        var activeTab2 = $(this).attr('data-csTab');

        $('.cs__tabItem').removeClass('active');
        $(this).addClass('active');
        $('#' + activeTab2).addClass('active');
    });
})

// file upload preview
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imgSection').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInput").change(function() {
    readURL(this);
});