<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $guarded = [];

    public static function getLocalePostResource($resource,$lang, $action, $posts){
        $resource_name = $resource.'_'.$lang;
        $namespace = 'App\\Http\\Resources\\'.ucfirst($lang). '\\Post\\';
        $class_name = $namespace.$resource_name;
        return call_user_func(array($class_name, $action), $posts)->resolve();
    }

}
