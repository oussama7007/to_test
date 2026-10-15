// 1. Define your data in a JavaScript object (like a struct in C)
const NevItms = ['Dashboard', 'Profile', "Messages", 'Saved', 'Favorites', 'Settings'];
const tenant = {
  name: 'Mohamed Alaoui',
  age: 22,
  since: '23-06-2023',
  city: 'Agadir',
  linkedin: 'linkedin.com/in/mohamedalaoui',
  instagram: '@mohamedalaoui',
};

export function TenantProfile() {
  return (
    <div>
      <div>
        <h2>Tenant Space</h2>
        <ul>
        {NevItms.map((item) => (<li key={item}>{item}</li>))}
        </ul>
      </div>
      {/* Box 1: Personal Info */}
      <div>
        <p>Name :{tenant.name}</p>
        <p>Age: {tenant.age}</p>
        <p>Tenant since {tenant.since}</p>
        <p>From {tenant.city}</p>
      </div>

      {/* Box 2: Social Media */}
      <div>
        <h2>Social Media</h2>
        <p>LinkedIn: {tenant.linkedin}</p>
        <p>Instagram: {tenant.instagram}</p>
      </div>
    </div>
  );
}