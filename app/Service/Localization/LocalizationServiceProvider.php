<?php

namespace App\Service\Localization;

use Illuminate\Support\ServiceProvider;

class LocalizationServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind('Localization','App\Service\Localization\Localization');
    }
}
