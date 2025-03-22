"use client";

function Avatar({ session, setShowSignout }) {
  function handleClick() {
    setShowSignout((show) => !show);
  }
  return (
    <div>
      <button onClick={handleClick}>
        {session.user.image ? (
          <img
            width={24}
            height={24}
            quality={100}
            referrerPolicy="no-referrer"
            src={session.user.image}
            className="mr-4 cursor-pointer rounded-full border border-white lg:mr-0 lg:mb-8"
            alt="avatar"
          />
        ) : (
          <img
            width={24}
            height={24}
            quality={100}
            referrerPolicy="no-referrer"
            src="/image-avatar.png"
            className="mr-4 cursor-pointer rounded-full border border-white lg:mr-0 lg:mb-8"
            alt="avatar"
          />
        )}
      </button>
    </div>
  );
}

export default Avatar;
