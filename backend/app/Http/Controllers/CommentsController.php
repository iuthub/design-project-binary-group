<?php

namespace App\Http\Controllers;

use App\Comments;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    public function create(Request $request) {
        $comment = new Comments($request->all());
        $comment->save();
        return response()->json(['result' => true, 'data' => $comment]);
    }

    public function getAll($id) {
        $hotelID = Comments::where('hotelID', $id)->first();
        if (empty($hotelID)) {
            return response()->json(['result' => false]);
        } else {
            $comments = Comments::where('hotelID', $id)->get();
            return response()->json(['result' => true, 'data' => $comments]);
        }
    }

    public function updateComment(Request $request, $id) {
        $commentID = Comments::where('id', $id)->first();
        if (empty($commentID)) {
            return response()->json(['result' => false]);
        } else {
            $commentID->update($request->all());
            $comments = Comments::where('id', $id)->get();
            return response()->json(['result' => true, 'data' => $comments]);
        }
    }

    public function removeComment($id) {
        $commentID = Comments::where('id', $id)->first();
        if (empty($commentID)) {
            return response()->json(['result' => false]);
        } else {
            $commentID->delete();
            return response()->json(['data' => true]);
        }
    }
}
