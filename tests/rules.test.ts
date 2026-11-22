// @ts-expect-error 
import { describe, expect, test } from 'vitest';
import { GetRuleResult } from '../src/src/rules';

describe('GetRuleResult', () => {

  test("test_CA_02_1_mediane_tour_2_nombre_impair", () => {
    // Arrange
    const votes = ["1", "5", "100"]; 

      // Act 
    const resultat = GetRuleResult(votes, "median", 2); // Il faut 3 paramètres qui sont : le tableau des votes, le nom de la règle et le numéro du tour de vote

    // Assert
    expect(resultat.statut).toBe(5);

  });

  // Pourquoi ce cas compte ? Permet de tester le cas où la medianne serait utiliser lorsque le nombre de votes est pair
  test("test_CA_02_2_mediane_tour_2_nombre_pair", () => {
    // Arrange
    const votes = ["3", "5", "2", "13"]; 

    // Act 
    const resultat = GetRuleResult(votes, "median", 2);

    // Assert
    expect(resultat.statut).toBe(3);

  });

  // Pourquoi ce cas compte ? Permet de voir le résultat produit par la présence d'un vote "café" parmis les votes
  test("test_CA_04_3_strict_tour_2_unanimite_carte_cafe", () => {
    // Arrange
    const votes = ["cafe", "8", "8", "8"]; //café est défini comme -1

    // Act 
    const resultat = GetRuleResult(votes, "strict", 2);

    // Assert
    expect(resultat.statut).toBe(8);

  });

  test('test_CA_04_2_regle_stricte_avec_4_joueurs',()=>{

    const votes = ["5","5","5","5"];

    const resultat = GetRuleResult(votes, "strict", 1);

    expect(resultat.statut).toBe(5); //revote

  })

  test('test_CA_04_1_regle_stricte_avec_4_joueurs', ()=>{

    const votes = ["3","3","8","5"];

    const resultat = GetRuleResult(votes, "strict", 1);

    expect(resultat.statut).toBe(-1); //revote

  })

  test('test_CA_03_1_mediane_premier_tour_non_unanime', ()=>{

    const votes = ["2","2","5"];

    const resultat = GetRuleResult(votes, "median", 1);

    expect(resultat.statut).toBe(-1); //revote
    
  })

  test(' test_CA_04_4_regle_stricte_carte_"?"', ()=>{

    const votes = ["3","5","?"];

    const resultat = GetRuleResult(votes, "strict", 2);

    expect(resultat.statut).toBe(-1); //revote

  }) 
});