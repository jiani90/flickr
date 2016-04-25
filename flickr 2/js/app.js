$(function() {
    var type = 'cloths';
    var year = 2013;

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true
    })
    $('.up').click(function() {
        $.scrollTo('html',500);
    })
    $(window).scroll(function() {
        if( $('body').scrollTop() > 300) {
            $('.up').css({
                opacity: 1
            });
        }else {
            $('.up').css({
                opacity: 0
            });
        }
    })
    $('.cloth_btn').click(function() {
        if(type !== 'cloths') {
            type = 'cloths';
            $.scrollTo('.content',500);
            mySwiper.slideTo(1);
            createGrid(type,2013);
            $('.active').removeClass('active');
            $('#' + type +' .btn_2013').addClass('active');
        }


    })
    $('.shoes_btn').click(function() {
        if(type !== 'shoes') {
            type = 'shoes';
            $.scrollTo('.content',500);
            mySwiper.slideTo(2);
            createGrid(type,2013);
            $('.active').removeClass('active');
            $('#' + type +' .btn_2013').addClass('active');
        }
    })
    $('.jewelry_btn').click(function() {
        if(type !== 'jewelry') {
            type = 'jewelry';
            $.scrollTo('.content',500);
            mySwiper.slideTo(3);
            createGrid(type,2013);
            $('.active').removeClass('active');
            $('#' + type +' .btn_2013').addClass('active');
        }

    })
    initGallery();
    function initGallery() {
        createGrid('cloths',2013);
        $('.active').remove('active');
        $('#cloths .btn_2013').addClass('active')
        $('.btn2').click(function(e) {
            $('.active').removeClass('active');
            $(this).addClass('active');
            year = 2012 + $(this).index();
            createGrid(type,year);
        })

    }
    function createGrid(_type,_year) {
        var wallTemp = '<img src="#imgSrc" data-fullsize="#fullsize">'
        var arr = data[_type][_year];
        var first = null;
        $('#' + _type + ' .wall').html('');
        arr.forEach(function(e) {
            var html = wallTemp.replace('#imgSrc', 'http://' + e[0]);
            var fullsizeUrl = e[0].split('_m.')[0].split('_n.')[0].split('_c.')[0].split('.jpg')[0];
            fullsizeUrl += '_c.jpg';
            if(!first) {
                first = fullsizeUrl;
            }
            html = html.replace('#fullsize', 'http://' + fullsizeUrl);
            $('#' + _type + ' .wall').append(html);
        });
        updateFullSize(_type, 'http://' + first);
        $('#' + _type + ' .wall img').click(function(e) {
            var fullsize = $(this).data('fullsize');
            updateFullSize(_type, fullsize);

        });
    }
    function updateFullSize(_type, url){
        var img = $('#' + _type + ' .pic img');
        $('#' + _type + ' .loading').fadeIn('fast');
        img.attr('src',url);


    }
})