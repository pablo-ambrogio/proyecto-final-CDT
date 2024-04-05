import { Link } from 'react-router-dom';
import Card from './Card'; // Asegúrate de importar correctamente tu componente Card
import CarMobi from '../../../assets/car-mobi.svg';

const BigCard = ({ vehicles }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {vehicles.slice(0, 4).map(vehicle => (
                <Card key={vehicle.id} vehicle={vehicle} />
            ))}
        </div>
    );
};

export default BigCard;
