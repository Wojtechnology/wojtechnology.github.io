#include <iostream>
#include <string>
#include <vector>

using namespace std;

void printSpaces(int x){
    if(x <= 0) return;
    cout << " ";
    printSpaces(x - 1);
}

int main(int argc, char* argv[]){
    vector<string> tokens(0);
    string temp;
    int n;
    cin >> n;
    if(n < 1){
        cerr << "Error, line length must be positive." << endl;
        return 0;
    }
    while(cin >> temp){
        tokens.push_back(temp);
    }
    int i = 0;
    while(i < tokens.size()){
        if(tokens.at(i).length() > n){
            cout << tokens.at(i).substr(0, n) << endl;
            i++;
        }else{
            int startIndex = i, curSize = 0, numWords = 0;
            bool lineDone = false;
            curSize += tokens.at(i).length();
            numWords++;
            i++;
            while(!lineDone && i < tokens.size()){
                int checkSize = curSize + tokens.at(i).length() + 1;
                if(checkSize > n){
                    lineDone = true;
                }else{
                    curSize += tokens.at(i).length() + 1;
                    numWords++;
                    i++;
                }
            }
            int spaces;
            if(numWords == 1){
                spaces = 0;
                cout << tokens.at(startIndex);
                printSpaces(n - tokens.at(startIndex).length());
            }else{
                spaces = n - curSize + numWords - 1;
                vector<int> spacesMap(numWords - 1);
                for(int j = 0; j < spaces; j++){
                    spacesMap.at(j % (numWords - 1))++;
                }
                for(int j = 0; j < numWords; j++){
                    if(j == 0){
                        cout << tokens.at(startIndex);
                    }else{
                        printSpaces(spacesMap.at(j - 1)); 
                        cout << tokens.at(startIndex + j);
                    }
                }
            } 
            cout << endl;
        }
    }
    return 0;
}
