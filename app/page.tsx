import TravelForm from './components/TravelForm';
import TravelList from './components/TravelList';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Travel Time Tracker</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TravelForm />
          <TravelList />
        </div>
      </div>
    </main>
  );
}
