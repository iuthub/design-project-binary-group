<?php

namespace App\Http\Controllers;

use App\Hotel;
use Illuminate\Http\Request;

class HotelController extends Controller{
        //
        public function getAll() {
                return response()->json(['data' => Hotel::all(),]);
        }

        public function getById($id) {
                return response()->json(['data' => Hotel::find($id)]);
        }

        public function updateById(Request $request, $id) {
                $hotel = Hotel::findOrFail($id);
                $hotel->update($request->all());

                return response()->json(['data' => $hotel]);
        }

        public function removeById($id) {
                $hotel = Hotel::findOrFail($id);
                $hotel->delete();

                return response()->json(['data' => true]);
        }

        public function create(Request $request) {
                $hotel = Hotel::create($request->all());

                return response()->json(['data' => $hotel]);
        }
}
