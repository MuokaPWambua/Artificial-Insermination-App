import './ExploreContainer.css';
import Receipt from './Receipt';
import AnimalForm from './AnimalForm'
interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="ontainer">
        <Receipt/>
        <AnimalForm/>
    </div>
  );
};

export default ExploreContainer;
