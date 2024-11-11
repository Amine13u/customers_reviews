<?php
// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");

header("Content-Type: application/json");

$testimonials = [
    [
        "name" => "John D.",
        "desc" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut elit id mi facilisis posuere. Cras lectus nisi, blandit ac ante in, hendrerit commodo odio. Nunc sit amet enim sapien.",
        "stars" => "5",
    ],
    [
        "name" => "Richard B.",
        "desc" => "Cras bibendum ullamcorper luctus. Nullam et tempus dui. Aliquam aliquet velit nisi, eu scelerisque libero pellentesque a. Sed viverra rhoncus purus.",
        "stars" => "3",
    ],
    [
        "name" => "Denise G.",
        "desc" => "Etiam tristique tincidunt turpis, et scelerisque tellus pellentesque a. Sed convallis tortor justo, eget vehicula leo finibus et. Suspendisse ultrices posuere tortor, vel convallis risus volutpat eget.",
        "stars" => "0",
    ],
    [
        "name" => "Ubald X.",
        "desc" => "Sed sodales eros nec turpis fermentum, et tincidunt magna interdum.",
        "stars" => "2",
    ],
    [
        "name" => "Estelle L.",
        "desc" => "Pellentesque a neque at lectus dapibus ornare. Duis molestie, quam eleifend vulputate interdum, nisl erat fringilla erat, vitae viverra erat ipsum eget orci.",
        "stars" => "4",
    ],
    [
        "name" => "Aimable H.",
        "desc" => "Proin vitae consequat lorem, et hendrerit magna. Suspendisse eu ligula viverra, lobortis dolor et, pulvinar mauris. In hac habitasse platea dictumst.",
        "stars" => "1",
    ],
];

$filtered_testimonials = array_filter($testimonials, function($testimonial) {
    return $testimonial['stars'] >= 2;
});

usort($filtered_testimonials, function($a, $b) {
    return $b['stars'] - $a['stars'];
});

echo json_encode($filtered_testimonials);