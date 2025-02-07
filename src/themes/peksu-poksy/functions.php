<?php
wp_enqueue_style('style', get_stylesheet_uri());

add_filter('acf/format_value/name=amount', 'format_number_as_currency', 20, 3);
function format_number_as_currency($value, $post_id, $field)
{
    if ($value > 0) {
        return number_format(($value), 0, ',', ' ') . '€';
    }

    return $value;
}