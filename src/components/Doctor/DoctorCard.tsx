interface Props {
  name: string;
  role: string;
  image: string;
}

export const DoctorCard = ({ name, role, image }: Props) => {
  return (
    <div
      className="
        group
        text-center
        max-w-[260px]
        mx-auto
        px-3
        py-6
      "
    >
      {/* Image container */}
      <div
        className="
          w-full
          h-[260px]
          overflow-hidden
          mx-auto
          mb-6
          rounded-[140px_40px_40px_40px]
          bg-[#f4f7ff]
        "
      >
        <img
          src={image}
          alt={name}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            ease-out
            group-hover:scale-105
          "
        />
      </div>

      {/* Name */}
      <h4
        className="
          text-[20px]
          font-bold
          text-gray-900
          leading-tight
          min-h-[24px]
        "
      >
        {name}
      </h4>

      {/* Role */}
      <span className="block text-[14px] text-[var(--primary-purple)] font-medium mt-1">
        {role}
      </span>
    </div>
  );
};
