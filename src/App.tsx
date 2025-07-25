import { lazy, Suspense } from "react";
import "./App.css";
import { useLenis } from "./hooks/useLenis";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  // Initialize Lenis smooth scrolling
  useLenis();

  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
