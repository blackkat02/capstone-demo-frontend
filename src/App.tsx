import HomePage from "./pages/HomePage";

export default function App() {
  const handleOpenSignIn = () => {
    console.log("Open Sign In Modal");
  };

  const handleOpenSignUp = () => {
    console.log("Open Sign Up Modal");
  };

  return (
    <HomePage
      isAuthenticated={false}
      userBalance={0}
      onOpenSignIn={handleOpenSignIn}
      onOpenSignUp={handleOpenSignUp}
    />
  );
}
