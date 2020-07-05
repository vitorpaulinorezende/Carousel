(function () {
    $.fn.carousel = function (target, options) {
        var img = this.find(target)
        var img_width =  img.first().width()
        var count = img.length
        var ident_left = 1
        var ident_right = count

        var defaults = {
            left_trigger: '.slide-left-hook',
            right_trigger: '.slide-right-hook',
            time: 400
        }
        $.extend(defaults, options)

        $(window).on('resize', function () {
            img_width =  img.first().width().toString()
        })

        $(defaults.right_trigger).on('click', function (e) {
            e.preventDefault()

            if(ident_left < count){
                ident_left++
                if(ident_right > 1) ident_right--

                img.first().animate({
                    'margin-left': '-='+img_width
                }, defaults.time)
            }
        })

        $(defaults.left_trigger).on('click', function (e) {
            e.preventDefault()

            if(ident_right < count){
                ident_right++
                if(ident_left > 1) ident_left--

                img.first().animate({
                    'margin-left': '+='+img_width
                }, defaults.time)
            }
        })
    }
}(jQuery))