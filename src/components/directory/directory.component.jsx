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
      imageUrl: 'https://i.ibb.co/6B0M0Sr/hogwarts-legacy.webp',
      route: 'shop/adventure%20games'
    },
    {
      id: 3,
      title: 'Strategy Games',
      imageUrl: 'https://i.ibb.co/TtDdbyT/age-of-empires-iii-game-cover-altar-of-gaming.webp',
      route: 'shop/strategy%20games'
    },
    {
      id: 4,
      title: 'Role-Playing',
      imageUrl: 'https://i.ibb.co/w4msb6m/fable-game-cover-altar-of-gaming.webp',
      route: 'shop/role-playing%20games'
    },
    {
      id: 5,
      title: 'Simulation Games',
      imageUrl: 'https://i.ibb.co/WFM20st/goat-simulator-3-game-cover-altar-of-gaming.webp',
      route: 'shop/simulation%20games'
    },
    {
      id: 6,
      title: 'Racing Games',
      imageUrl: 'https://i.ibb.co/Xs0cfrh/need-for-speed-heat-game-cover-altar-of-gaming.webp',
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