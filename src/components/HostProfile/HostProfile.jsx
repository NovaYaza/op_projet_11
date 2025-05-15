import './HostProfile.scss';

function HostProfile({ host }) {
  const [firstName, ...lastName] = host.name.split(' ');

  return (
    <div className="host-profile">
      <div className="host-name">
        <span>{firstName}</span>
        <span>{lastName.join(' ')}</span>
      </div>
      <img className="host-picture" src={host.picture} alt={host.name} />
    </div>
  );
}

export default HostProfile;