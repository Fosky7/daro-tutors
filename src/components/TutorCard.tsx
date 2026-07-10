interface TutorCardProps {
  name: string;
  image: string;
  subjects: string[];
  bio: string;
}

const TutorCard = ({ name, image, subjects, bio }: TutorCardProps) => {
  return (
    <div className="rounded-lg bg-card p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      <img 
        src={image} 
        alt={`Photo of ${name}`} 
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="font-display text-xl mb-2 text-primary text-center">{name}</h3>
      <div className="flex flex-wrap justify-center gap-1 mb-3">
        {subjects.map(subject => (
          <span key={subject} className="inline-block bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">
            {subject}
          </span>
        ))}
      </div>
      <p className="text-sm text-muted-foreground text-center">{bio}</p>
    </div>
  );
};

export default TutorCard;
