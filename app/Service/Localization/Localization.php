<?php

namespace App\Service\Localization;

use Exception;

class Localization
{


    public static function locale(){
        $locale = request()->segment(2,'');


        if ($locale && in_array($locale, config('app.locales'))){
            return $locale;
        }

        return Exception::class;

    }
}
