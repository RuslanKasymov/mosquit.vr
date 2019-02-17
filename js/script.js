jQuery(document).ready(function ($) {
    ymaps.ready(function () {
            var myMap = new ymaps.Map('map_contact', {
                    center: [54.987962, 73.441554],
                    zoom: 16,
                    controls: []
                }),
                // Создаём макет содержимого.
                MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                ),
                myPlacemarkWithContent = new ymaps.Placemark([54.987962, 73.433654], {});
            myMap.geoObjects
                .add(myPlacemarkWithContent);
        });
});