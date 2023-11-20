<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Laravel\Sanctum\PersonalAccessToken;
use Laravel\Sanctum\Sanctum;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {

        sanctum::authenticateaccesstokensusing(function (personalaccesstoken $token, $isvalid) {
            if($isvalid) return true;
            if($token["abilities"][0] == "remember"){
                return $token->can('remember') && $token->created_at->gt(now()->subyears(5));
            }
        });
    }
}
