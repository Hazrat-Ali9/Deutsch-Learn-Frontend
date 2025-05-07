'use client';

import { auth } from "@/firebase/firebaseConfig";
import { useEffect, useState } from "react";

interface Comment {
  _id: string;
  fullName: string;
  text: string;
  replies: { fullName: string; text: string }[];
}

const Comment = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState("");
  const [replyText, setReplyText] = useState<{ [key: string]: string }>({});
  const [showReply, setShowReply] = useState<{ [key: string]: boolean }>({});
  const [showCommentInput, setShowCommentInput] = useState(false);

  useEffect(() => {
    fetch("http://localhost:7000/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  const handleComment = async () => {
    if (!auth.currentUser) return alert("Please log in first!");
    await fetch("http://localhost:7000/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: auth.currentUser.email, text: commentText }),
    });
    setCommentText("");
    setShowCommentInput(false);
    window.location.reload();
  };

  const handleReply = async (commentId: string) => {
    if (!auth.currentUser) return alert("Please log in first!");
    await fetch(`http://localhost:7000/comments/reply/${commentId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: auth.currentUser.email, text: replyText[commentId] }),
    });
    setReplyText({ ...replyText, [commentId]: "" });
    setShowReply({ ...showReply, [commentId]: false });
    window.location.reload();
  };

  return (
    <div>
      <h2>Comments</h2>
      <button onClick={() => setShowCommentInput(!showCommentInput)}>
        {showCommentInput ? "Hide Comment" : "Comment"}
      </button>
      {showCommentInput && (
        <div>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment"
          />
          <button onClick={handleComment}>Post Comment</button>
        </div>
      )}

      {comments.map((comment) => (
        <div key={comment._id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <strong>{comment.fullName}</strong>: {comment.text}
          <div>
            {showReply[comment._id] ? (
              <>
                <textarea
                  value={replyText[comment._id] || ""}
                  onChange={(e) => setReplyText({ ...replyText, [comment._id]: e.target.value })}
                  placeholder="Reply..."
                />
                <button onClick={() => handleReply(comment._id)}>Reply</button>
                <button onClick={() => setShowReply({ ...showReply, [comment._id]: false })}>Cancel</button>
              </>
            ) : (
              <button onClick={() => setShowReply({ ...showReply, [comment._id]: true })}>Reply</button>
            )}
          </div>
          {comment.replies.map((reply, index) => (
            <p key={index} style={{ paddingLeft: "20px" }}>
              <strong>{reply.fullName}</strong>: {reply.text}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Comment;
