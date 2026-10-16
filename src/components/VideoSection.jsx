'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  MoreHorizontal,
  Bookmark,
  Share2,
  Music2,
  Check,
  Copy,
  ExternalLink,
  MessageCircle,
  X,
  Send,
  Sparkles
} from 'lucide-react'
import { InstagramIcon } from './Icons'

// Authentic Instagram SVG Verified Badge
function VerifiedBadge({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
        className="fill-[#0095F6]"
      />
      <path
        d="M9.5 16.5l-4-4 1.41-1.41L9.5 13.67l7.09-7.09L18 8l-8.5 8.5z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

// Authentic Instagram Heart Icon
function InstaHeartIcon({ filled = false, className = 'w-6 h-6' }) {
  if (filled) {
    return (
      <svg className={`${className} fill-[#FF3040] text-[#FF3040]`} viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    )
  }
  return (
    <svg
      className={`${className} text-[#262626] hover:text-[#8E8E8E] transition-colors`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

// Authentic Instagram Comment Bubble Icon
function InstaCommentIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={`${className} text-[#262626] hover:text-[#8E8E8E] transition-colors -scale-x-100`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}

// Authentic Instagram Share Paper Airplane Icon
function InstaShareIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={`${className} text-[#262626] hover:text-[#8E8E8E] transition-colors`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

// Authentic Instagram Bookmark Icon
function InstaBookmarkIcon({ filled = false, className = 'w-6 h-6' }) {
  if (filled) {
    return (
      <svg className={`${className} fill-[#262626] text-[#262626]`} viewBox="0 0 24 24">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    )
  }
  return (
    <svg
      className={`${className} text-[#262626] hover:text-[#8E8E8E] transition-colors`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  )
}

// Single Instagram Post Card Component
function InstagramPostCard({ post, onToast }) {
  const [isLiked, setIsLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(post.initialLikes)
  const [isSaved, setIsSaved] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)
  const [showHeartAnim, setShowHeartAnim] = useState(false)
  const [showPlayOverlay, setShowPlayOverlay] = useState(false)
  const [showOptionsModal, setShowOptionsModal] = useState(false)
  const [showCommentsModal, setShowCommentsModal] = useState(false)
  const [comments, setComments] = useState(post.initialComments)
  const [commentInput, setCommentInput] = useState('')

  const videoRef = useRef(null)
  const cardRef = useRef(null)
  const commentInputRef = useRef(null)

  // IntersectionObserver to auto-play / pause when scrolling in and out
  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play().catch(() => {
              // Browser autoplay policy catch
            })
            setIsPlaying(true)
          } else {
            videoElement.pause()
            setIsPlaying(false)
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(videoElement)
    return () => {
      observer.disconnect()
    }
  }, [])

  // Toggle Video Play / Pause
  const handleTogglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
    setShowPlayOverlay(true)
    setTimeout(() => setShowPlayOverlay(false), 700)
  }

  // Toggle Sound Mute / Unmute
  const handleToggleMute = (e) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return
    const nextMuted = !isMuted
    video.muted = nextMuted
    setIsMuted(nextMuted)
  }

  // Handle Like Toggle
  const handleLike = (e) => {
    e?.stopPropagation()
    if (isLiked) {
      setIsLiked(false)
      setLikesCount((prev) => prev - 1)
    } else {
      setIsLiked(true)
      setLikesCount((prev) => prev + 1)
      setShowHeartAnim(true)
      setTimeout(() => setShowHeartAnim(false), 900)
    }
  }

  // Handle Double Tap / Double Click on Video
  const handleDoubleTap = (e) => {
    e.stopPropagation()
    if (!isLiked) {
      setIsLiked(true)
      setLikesCount((prev) => prev + 1)
    }
    setShowHeartAnim(true)
    setTimeout(() => setShowHeartAnim(false), 900)
  }

  // Handle Bookmark / Save Toggle
  const handleSave = (e) => {
    e.stopPropagation()
    setIsSaved(!isSaved)
    onToast(isSaved ? 'Removed from saved' : 'Saved to your collection ✨')
  }

  // Handle Share / Copy Link
  const handleShare = (e) => {
    e.stopPropagation()
    const url = `https://www.instagram.com/omr.a2z.events/`
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url)
      onToast('Instagram link copied to clipboard! 📋')
    } else {
      window.open(url, '_blank')
    }
  }

  // Handle Add New Comment
  const handleAddComment = (e) => {
    e.preventDefault()
    if (!commentInput.trim()) return

    const newComment = {
      id: Date.now(),
      user: 'you',
      text: commentInput.trim(),
      liked: false,
      timeAgo: 'Just now'
    }

    setComments((prev) => [...prev, newComment])
    setCommentInput('')
    onToast('Comment posted! 💬')
  }

  const handleQuickEmoji = (emoji) => {
    setCommentInput((prev) => prev + emoji)
    if (commentInputRef.current) {
      commentInputRef.current.focus()
    }
  }

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className="bg-white border border-[#EAE5DE] rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)] transition-all duration-300 flex flex-col overflow-hidden max-w-[420px] mx-auto w-full"
    >
      {/* 1. Header: Profile Info */}
      <div className="px-3.5 py-3 flex items-center justify-between border-b border-[#F0ECE6]">
        <div className="flex items-center gap-2.5">
          {/* Instagram Gradient Ring Avatar */}
          <a
            href="https://www.instagram.com/omr.a2z.events/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-[2px] rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex-shrink-0 transition-transform hover:scale-105"
            aria-label="View OMR A2Z Instagram profile"
          >
            <div className="w-9 h-9 rounded-full bg-white p-0.5 overflow-hidden">
              <img
                src="/images/file_00000000ffbc81faa9ceedf25b696b4f.png"
                alt="omr.a2z.events avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </a>

          {/* Username, Verified Badge, Location */}
          <div className="flex flex-col text-left leading-tight">
            <div className="flex items-center gap-1.5">
              <a
                href="https://www.instagram.com/omr.a2z.events/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-semibold text-[#262626] hover:text-[#77716A] transition-colors"
              >
                omr.a2z.events
              </a>
              <VerifiedBadge className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="text-[#8E8E8E] text-xs">•</span>
              <button
                type="button"
                onClick={() => setIsFollowing(!isFollowing)}
                className={`text-xs font-semibold cursor-pointer transition-colors ${
                  isFollowing ? 'text-[#8E8E8E]' : 'text-[#0095F6] hover:text-[#00376B]'
                }`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
            <span className="text-[11px] text-[#737373] mt-0.5 truncate max-w-[190px]">
              {post.location}
            </span>
          </div>
        </div>

        {/* Top Right Options Three Dots */}
        <button
          type="button"
          onClick={() => setShowOptionsModal(true)}
          className="p-1.5 text-[#262626] hover:text-[#8E8E8E] rounded-full transition-colors cursor-pointer"
          aria-label="More options"
        >
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* 2. Media Area: Video Player */}
      <div
        className="relative aspect-[4/5] bg-black overflow-hidden select-none cursor-pointer group"
        onClick={handleTogglePlay}
        onDoubleClick={handleDoubleTap}
      >
        <video
          ref={videoRef}
          src={post.videoSrc}
          className="w-full h-full object-cover"
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
        />

        {/* Instagram Reel Icon Pill at Top Right */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-black/55 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-white/15 pointer-events-none">
          <InstagramIcon className="w-3.5 h-3.5" />
          <span>Reel</span>
        </div>

        {/* Play / Pause Central Overlay Indicator */}
        <AnimatePresence>
          {showPlayOverlay && (
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
            >
              <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white shadow-xl">
                {isPlaying ? <Play className="w-8 h-8 ml-1" /> : <Pause className="w-8 h-8" />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Double-tap Big Heart Pop Animation */}
        <AnimatePresence>
          {showHeartAnim && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.3, 1], opacity: [0, 1, 0.95] }}
              exit={{ scale: 1.4, opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
            >
              <svg className="w-24 h-24 fill-[#FF3040] drop-shadow-[0_8px_25px_rgba(255,48,64,0.6)]" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

  

        {/* Sound Toggle Button (Bottom Right) */}
        <button
          type="button"
          onClick={handleToggleMute}
          className="absolute bottom-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border border-white/20 cursor-pointer shadow-md"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* 3. Action Bar: Like, Comment, Share, Bookmark */}
      <div className="px-3.5 pt-3 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Like Button */}
          <button
            type="button"
            onClick={handleLike}
            className="cursor-pointer active:scale-125 transition-transform duration-150"
            aria-label={isLiked ? 'Unlike' : 'Like'}
          >
            <InstaHeartIcon filled={isLiked} className="w-6 h-6" />
          </button>

          {/* Comment Button */}
          <button
            type="button"
            onClick={() => setShowCommentsModal(true)}
            className="cursor-pointer active:scale-110 transition-transform duration-150"
            aria-label="Comment"
          >
            <InstaCommentIcon className="w-6 h-6" />
          </button>

          {/* Share Button */}
          <button
            type="button"
            onClick={handleShare}
            className="cursor-pointer active:scale-110 transition-transform duration-150"
            aria-label="Share"
          >
            <InstaShareIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Bookmark / Save Button */}
        <button
          type="button"
          onClick={handleSave}
          className="cursor-pointer active:scale-110 transition-transform duration-150"
          aria-label={isSaved ? 'Remove Bookmark' : 'Bookmark'}
        >
          <InstaBookmarkIcon filled={isSaved} className="w-6 h-6" />
        </button>
      </div>

      {/* 4. Likes Row with Overlapping Friend Avatars */}
      <div className="px-3.5 py-1 text-left">
        <div className="flex items-center gap-2">
          {/* Overlapping mini avatars */}
          <div className="flex -space-x-1.5 overflow-hidden">
            <span className="w-4 h-4 rounded-full border border-white bg-[#A52A32] text-[8px] text-white flex items-center justify-center font-bold">
              K
            </span>
            <span className="w-4 h-4 rounded-full border border-white bg-[#C6A46A] text-[8px] text-white flex items-center justify-center font-bold">
              T
            </span>
            <span className="w-4 h-4 rounded-full border border-white bg-[#22201E] text-[8px] text-white flex items-center justify-center font-bold">
              O
            </span>
          </div>

          <p className="text-[13px] text-[#262626]">
            Liked by <span className="font-semibold">kannur_celebrations</span> and{' '}
            <span className="font-semibold">{likesCount.toLocaleString()} others</span>
          </p>
        </div>
      </div>

      {/* 5. Caption & Description with "... more" */}
      <div className="px-3.5 py-1 text-left text-[13px] text-[#262626] leading-relaxed">
        <span className="font-semibold mr-1.5">omr.a2z.events</span>
        <span>
          {isExpanded ? post.caption : post.caption.slice(0, 88)}
          {post.caption.length > 88 && (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#8E8E8E] hover:text-[#262626] text-xs font-medium ml-1 cursor-pointer transition-colors"
            >
              {isExpanded ? ' less' : '... more'}
            </button>
          )}
        </span>

        {/* Hashtags */}
        {isExpanded && (
          <div className="mt-2 flex flex-wrap gap-1 text-[#00376B] text-xs font-normal">
            {post.hashtags.map((tag) => (
              <span key={tag} className="hover:underline cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 6. Comments Summary & Preview */}
      <div className="px-3.5 py-1 text-left">
        <button
          type="button"
          onClick={() => setShowCommentsModal(true)}
          className="text-[13px] text-[#8E8E8E] hover:text-[#262626] cursor-pointer transition-colors block text-left"
        >
          View all {comments.length} comments
        </button>

        {/* Latest comment snippet */}
        {comments.length > 0 && (
          <div className="mt-1 text-[12px] text-[#262626] flex items-center justify-between">
            <p className="truncate pr-2">
              <span className="font-semibold mr-1.5">{comments[comments.length - 1].user}</span>
              <span className="text-[#59534B]">{comments[comments.length - 1].text}</span>
            </p>
            <InstaHeartIcon className="w-3.5 h-3.5 text-[#8E8E8E] flex-shrink-0" />
          </div>
        )}
      </div>

      {/* 7. Post Timestamp */}
      <div className="px-3.5 pt-1 pb-2.5 text-left">
        <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8E8E8E]">
          {post.dateAgo}
        </span>
      </div>

      {/* 8. Interactive "Add a comment..." Bar */}
      <div className="px-3.5 py-2.5 border-t border-[#F0ECE6] bg-[#FAF8F5]/60 flex items-center justify-between gap-2 mt-auto">
        {/* Quick Emoji Bar */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {['❤️', '🔥', '👏', '😍'].map((emoji) => (
            <button
              key={emoji}
              type="button"
              onClick={() => handleQuickEmoji(emoji)}
              className="text-sm hover:scale-125 transition-transform cursor-pointer"
              aria-label={`Add ${emoji}`}
            >
              {emoji}
            </button>
          ))}
        </div>

        {/* Comment input form */}
        <form onSubmit={handleAddComment} className="flex items-center gap-2 flex-grow">
          <input
            ref={commentInputRef}
            type="text"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Add a comment..."
            className="w-full text-xs text-[#262626] bg-transparent focus:outline-none placeholder:text-[#8E8E8E]"
          />
          <button
            type="submit"
            disabled={!commentInput.trim()}
            className={`text-xs font-semibold transition-colors flex-shrink-0 ${
              commentInput.trim()
                ? 'text-[#0095F6] hover:text-[#00376B] cursor-pointer'
                : 'text-[#0095F6]/40 cursor-not-allowed'
            }`}
          >
            Post
          </button>
        </form>
      </div>

      {/* MODAL 1: Options Three Dots Modal */}
      {showOptionsModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setShowOptionsModal(false)}
        >
          <div
            className="bg-white w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl divide-y divide-[#EAE5DE] text-center text-sm font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href="https://www.instagram.com/omr.a2z.events/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3.5 text-[#0095F6] font-semibold hover:bg-[#FAF8F5] transition-colors"
            >
              View on Instagram
            </a>
            <button
              type="button"
              onClick={() => {
                handleShare()
                setShowOptionsModal(false)
              }}
              className="w-full py-3.5 text-[#262626] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
            >
              Copy Link
            </button>
            <a
              href={`https://wa.me/919074796765?text=Hi%20OMR%20A2Z,%20I%20loved%20this%20Instagram%20setup:%20${encodeURIComponent(post.caption.slice(0, 60))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3.5 text-[#25D366] font-semibold hover:bg-[#FAF8F5] transition-colors"
            >
              Inquire on WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setShowOptionsModal(false)}
              className="w-full py-3.5 text-[#8E8E8E] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* MODAL 2: Comments Drawer / Modal */}
      {showCommentsModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setShowCommentsModal(false)}
        >
          <div
            className="bg-white w-full max-w-md rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Comments Header */}
            <div className="px-4 py-3 border-b border-[#EAE5DE] flex items-center justify-between">
              <h4 className="font-semibold text-sm text-[#262626]">Comments</h4>
              <button
                type="button"
                onClick={() => setShowCommentsModal(false)}
                className="p-1 text-[#8E8E8E] hover:text-[#262626] rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Comments Scrollable List */}
            <div className="p-4 overflow-y-auto space-y-4 flex-grow">
              {/* Original Post Caption */}
              <div className="flex items-start gap-3 pb-3 border-b border-[#F0ECE6]">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 p-0.5 border border-[#EAE5DE]">
                  <img
                    src="/images/file_00000000ffbc81faa9ceedf25b696b4f.png"
                    alt="avatar"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="text-left text-xs text-[#262626] leading-relaxed">
                  <span className="font-semibold mr-1.5">omr.a2z.events</span>
                  <span>{post.caption}</span>
                  <div className="text-[10px] text-[#8E8E8E] mt-1 font-medium">{post.dateAgo}</div>
                </div>
              </div>

              {/* Comments */}
              {comments.map((c) => (
                <div key={c.id} className="flex items-start justify-between gap-3 text-left">
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#EAE5DE] text-[10px] font-bold text-[#A52A32] flex items-center justify-center flex-shrink-0">
                      {c.user[0].toUpperCase()}
                    </div>
                    <div className="text-xs text-[#262626] leading-snug">
                      <span className="font-semibold mr-1.5">@{c.user}</span>
                      <span>{c.text}</span>
                      <div className="text-[10px] text-[#8E8E8E] mt-1">{c.timeAgo || '1d ago'}</div>
                    </div>
                  </div>
                  <InstaHeartIcon className="w-3.5 h-3.5 text-[#8E8E8E] flex-shrink-0 cursor-pointer hover:text-[#FF3040]" />
                </div>
              ))}
            </div>

            {/* Modal Comment Input */}
            <form onSubmit={handleAddComment} className="p-3 border-t border-[#EAE5DE] bg-[#FAF8F5] flex items-center gap-2">
              <input
                type="text"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="Add a comment as @guest..."
                className="w-full text-xs px-3 py-2 bg-white rounded-full border border-[#EAE5DE] focus:outline-none focus:border-[#0095F6]"
              />
              <button
                type="submit"
                disabled={!commentInput.trim()}
                className="p-2 rounded-full bg-[#0095F6] text-white disabled:opacity-40 cursor-pointer flex-shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </motion.article>
  )
}

// Main Video Section Component
export default function VideoSection() {
  const [toastMessage, setToastMessage] = useState(null)

  const showToast = (message) => {
    setToastMessage(message)
    setTimeout(() => {
      setToastMessage(null)
    }, 2800)
  }

  // 3 Selected Instagram Video Posts from public/video/
  const instagramPosts = [
    {
      id: 'post-1',
      videoSrc: '/video/4_5950474444676795293.mp4',
      location: 'Kannur Royal Marquee, Kerala',
      audioTitle: 'OMR A2Z • Grand Reception Symphony',
      initialLikes: 1842,
      dateAgo: '2 DAYS AGO',
      caption:
        'Grand Radial Canopy & Starburst Fairy Lighting ✨ When royal burgundy drapes meet thousands of cascading fairy lights, unforgettable moments are born. Designed with bespoke crystal chandeliers and warm incandescent ambiance in Kannur. 🏛️💐',
      hashtags: ['#OMRA2Z', '#KannurWeddings', '#KeralaEvents', '#WeddingDecor', '#LuxuryPlanners'],
      initialComments: [
        { id: 1, user: 'anjali_nair_weddings', text: 'The ceiling drape starburst is breathtaking! 😍', timeAgo: '2d ago' },
        { id: 2, user: 'rahul_rajesh_99', text: 'Exceptional perfection by OMR A2Z team 👏🔥', timeAgo: '1d ago' },
        { id: 3, user: 'kavya_krishnan', text: 'Dream decor for any wedding reception ✨', timeAgo: '18h ago' }
      ]
    },
    {
      id: 'post-2',
      videoSrc: '/video/4_5950574740753091439.mp4',
      location: 'Thalassery Heritage Lounge',
      audioTitle: 'OMR A2Z • Live Refreshment & Mocktails',
      initialLikes: 2419,
      dateAgo: '4 DAYS AGO',
      caption:
        'Artisanal Live Refreshment Lounge & Signature Mocktails 🍹 Refreshing live counters, traditional Malabar kulukki corners, and bespoke hospitality crafted for our guests at Thalassery. Service with warmth, hygiene, and perfection! 🥥✨',
      hashtags: ['#MalabarWeddings', '#LiveCounters', '#ThalasseryEvents', '#OMRA2Z', '#EventCatering'],
      initialComments: [
        { id: 1, user: 'shamseer_thalassery', text: 'Best mocktail and live counter experience in North Kerala 🔥', timeAgo: '4d ago' },
        { id: 2, user: 'farhana_designs', text: 'Very aesthetic counter design and warm hospitality ❤️', timeAgo: '3d ago' },
        { id: 3, user: 'adil_kannur', text: 'Super refreshing drinks and classy presentation 👏', timeAgo: '2d ago' }
      ]
    },
    {
      id: 'post-3',
      videoSrc: '/video/4_5950707700055673677.mp4',
      location: 'Grand Ballroom, Kannur',
      audioTitle: 'OMR A2Z • Royal Bridal Promenade',
      initialLikes: 3512,
      dateAgo: '1 WEEK AGO',
      caption:
        'Dreamy Floral Promenade & Fairytale Royal Stage Entry 🌸 Every bride and groom deserves a walkthrough of dreams. Crafted with fresh floral festoons, golden warm candelabras, and signature royal stage styling. 👑💫',
      hashtags: ['#StageDecoration', '#KeralaBride', '#KeralaGroom', '#KannurDiaries', '#RoyalCelebrations'],
      initialComments: [
        { id: 1, user: 'dr_sneha_menon', text: 'Felt like walking into a royal palace! Loved every detail ❤️✨', timeAgo: '6d ago' },
        { id: 2, user: 'akhil_photography', text: 'Lighting was super photographer-friendly, shots came out crisp 📸', timeAgo: '5d ago' },
        { id: 3, user: 'resmi_vipin', text: 'Pure elegance! Booking you for our upcoming family event 🎉', timeAgo: '4d ago' }
      ]
    }
  ]

  return (
    <section id="videos" className="py-24 lg:py-32 bg-[#FAF8F5] border-b border-[#EAE5DE] relative overflow-hidden">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#A52A32]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#C6A46A]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          {/* Subtitle tag */}
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#A52A32]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A52A32] flex items-center gap-1.5">
              <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C]" />
              Instagram Feed & Reels
            </span>
            <span className="w-6 h-[1px] bg-[#A52A32]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#22201E] mb-4">
            Our Real Celebrations in Motion
          </h2>

          <p className="text-sm sm:text-base text-[#77716A] leading-relaxed max-w-2xl mx-auto mb-6">
            Experience our stage transformations, live beverage hospitality, and grand floral walkways directly from our official Instagram feed. Tap to unmute and explore live footage.
          </p>

          {/* Follow Instagram Button Pill */}
          <div className="flex items-center justify-center">
            <a
              href="https://www.instagram.com/omr.a2z.events/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white text-xs font-bold uppercase tracking-wider shadow-[0_4px_18px_rgba(225,48,108,0.35)] hover:shadow-[0_8px_25px_rgba(225,48,108,0.45)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow @omr.a2z.events</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            </a>
          </div>
        </motion.div>

        {/* 3 Instagram Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-start">
          {instagramPosts.map((post) => (
            <InstagramPostCard key={post.id} post={post} onToast={showToast} />
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 sm:mt-18 max-w-2xl mx-auto text-center p-6 bg-white border border-[#EAE5DE] rounded-2xl shadow-xs"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="font-serif text-base font-semibold text-[#22201E]">
                Want a custom setup like these videos?
              </h4>
              <p className="text-xs text-[#77716A] mt-0.5">
                Share your favorite reel with us on WhatsApp for an instant customized estimate.
              </p>
            </div>
            <a
              href="https://wa.me/919074796765?text=Hi%20OMR%20A2Z,%20I%20saw%20your%20Instagram%20reels%20on%20the%20website%20and%20would%20like%20to%20discuss%20decor%20ideas."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-sm hover:shadow-md transition-all flex-shrink-0"
            >
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-[#22201E] text-white px-5 py-2.5 rounded-full shadow-2xl text-xs font-medium flex items-center gap-2 border border-white/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C6A46A]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
