import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const categories = [
    {
      id: 1,
      title: 'Action Games',
      imageUrl: 'https://i.ibb.co/rpjqx3F/Cyberpunk-2077.jpg',
      route: 'shop/action%20games'
    },
    {
      id: 2,
      title: 'Adventure Games',
      imageUrl: 'https://i.ibb.co/c8nwwqq/The-Witcher-3-Wild-Hunt.jpg',
      route: 'shop/adventure%20games'
    },
    {
      id: 3,
      title: 'Strategy Games',
      imageUrl: 'https://i.ibb.co/zX3K2Jv/Sid-Meier-s-Civilization-VI.jpg',
      route: 'shop/strategy%20games'
    },
    {
      id: 4,
      title: 'Role-Playing',
      imageUrl: 'https://i.ibb.co/S3qzcb2/Baldur-s-Gate-3.jpg',
      route: 'shop/role-playing%20games'
    },
    {
      id: 5,
      title: 'Simulation Games',
      imageUrl: 'https://i.ibb.co/HzJJF8Y/Euro-Truck-Simulator-2.jpg',
      route: 'shop/simulation%20games'
    },
    {
      id: 6,
      title: 'Racing Games',
      imageUrl: 'https://i.ibb.co/KWr1stP/Need-for-Speed-Heat.jpg',
      route: 'shop/racing%20games'
    }
];

const Directory = () => {
    return (
        <div className="directory-container">
            {categories.map(( category ) => (
                <DirectoryItem 
                    key={category.id}
                    category={category}
                />
            ))}
        </div>
    )
}

export default Directory;