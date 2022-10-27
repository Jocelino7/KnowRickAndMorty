import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import Details from './pages/Details';
import Search from './components/Search';
import SearchScreen from "./pages/SearchScreen"

const Stack = createNativeStackNavigator()
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()

})

export default function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='HomeScreen'>

            <Stack.Screen
              name="HomeScreen"
  
              component={HomeScreen}
              options={{
                headerRight: () => <Search />,
                title: ""
              }}
            />
            <Stack.Screen
              name="SearchScreen"
              component={SearchScreen}
              options={{
                headerRight: () => <Search />,
                title: ""
              }}
            />
            <Stack.Screen name="Details" component={Details} />

          </Stack.Navigator>
        </NavigationContainer>


      </ApolloProvider>

    </>



  )
}
