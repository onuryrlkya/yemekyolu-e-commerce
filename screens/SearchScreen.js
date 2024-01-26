import { StyleSheet, Text, View } from "react-native";
import React, {useState} from "react";
import SearchBar from "../Components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../Components/ResultsList";

export default function SearchScreen() {
  const [searchApi,results] = useResults();

  const [term, setTerm] = useState('')
  // console.log(results);

  const filterResultsByPrice = (price) =>{
    return results.filter((results)=>{
      return results.price == price;
    })
  }
  return (
    <View>
      <SearchBar
      term={term}
      onTermChange={setTerm}
      onTermSubmit={()=>searchApi(term)} />
      <ResultsList title='Öğrenci Dostu Restoranlar' results={filterResultsByPrice('₺')} />
      <ResultsList title='Uygun Restoranlar' results={filterResultsByPrice('₺₺')} />
      <ResultsList title='Kaliteli Restoranlar' results={filterResultsByPrice('₺₺₺')} />

    </View>
  );
}

const styles = StyleSheet.create({});
