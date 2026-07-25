<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreItemRequest extends FormRequest
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
            'title' => [
                'required',
                'string',
                'max:255'
            ],

            'slug' => [
                'required',
                'string',
                'unique:items,slug'
            ],

            'description' => [
                'required'
            ],

            'type' => [
                'required',
                Rule::in([
                    'development',
                    'design',
                    'marketing',
                    'photography',
                    'vfx'
                ])
            ],

            'featured' => [
                'boolean'
            ],

            'status' => [
                'boolean'
            ],

            'time_took' => [
                'nullable',
                'integer',
                'min:1'
            ],

            'url' => [
                Rule::requiredIf($this->type == 'development'),
                'nullable',
                'url'
            ],

            'brand_overview' => [
                Rule::requiredIf($this->type == 'design'),
                'nullable',
                'string'
            ],

            'overview' => [
                Rule::requiredIf($this->type == 'vfx'),
                'nullable',
                'string'
            ],

            'result' => [
                Rule::requiredIf($this->type == 'vfx'),
                'nullable',
                'string'
            ],

        ];
    }
    public function messages(): array
    {
        return [

            'title.required' => 'Title is required.',

            'slug.required' => 'Slug is required.',

            'slug.unique' => 'Slug already exists.',

            'description.required' => 'Description is required.',

            'type.required' => 'Item type is required.',

            'url.required' => 'Website URL is required for development projects.',

            'brand_overview.required' => 'Brand overview is required.',

            'overview.required' => 'Overview is required.',

            'result.required' => 'Result is required.',

        ];
    }
}

