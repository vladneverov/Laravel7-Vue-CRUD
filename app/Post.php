<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title', 'description'
    ];

    public $rules = [
        'title' => 'required|max:255',
        'description' => 'required|max:255'
    ];

    public $attributes = [
        'title' => 'название',
        'description' => 'описание'
    ];

    public function validate($request)
    {
        return $request->validate($this->rules, [], $this->attributes);
    }
}
