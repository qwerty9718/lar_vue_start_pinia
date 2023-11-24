<?php

namespace App\Http\Requests\Post;

use Illuminate\Foundation\Http\FormRequest;

class PostStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title_ru' => 'required|string|min:5|max:30',
            'title_en' => 'required|string|min:5|max:30',
            'body_ru' => 'required|string|min:5',
            'body_en' => 'required|string|min:5'
        ];
    }


//    public function messages()
//    {
//        return [
//            'title_ru.required' => __('validation.required')
//        ];
//    }
}
