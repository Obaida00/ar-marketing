<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateItemRequest extends FormRequest
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
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',

            'slug' => [
                'required',
                Rule::unique('items', 'slug')
                    ->ignore($this->item)
            ],

            'description' => 'required',

            'featured' => 'boolean',

            'status' => 'boolean',

            'time_took' => 'nullable|integer|min:1',

        ];
    }
}
