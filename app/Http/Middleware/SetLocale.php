<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Symfony\Component\HttpFoundation\Response;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        function getPrefix($str) {
            $prefix = explode("/", $str);
            return $prefix[1];
        }
        $langPrefix = getPrefix($request->route()->getPrefix());
        App::setLocale($langPrefix);
        return $next($request);
    }
}
