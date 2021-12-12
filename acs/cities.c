#include <stdio.h>
#include <stdlib.h>

#include <sys/types.h>
#include <unistd.h>
#include <math.h>

int * move_from_city(int *array, int index){
    char cities[4] = {
        'a', 'b', 'c', 'd'
    };
    
    char current_city = cities[index];
    
    int array_from[4];
    printf("Want to go from city A to B, C, D \n");
    for (int i=0;i<4;i++) {
        if (i == index){
            array_from[i] = 0;
            continue;
        }
        scanf("%d",&array_from[i]);
    }
    
    int sum = 0;
    for(int i = 0; i < 3; i++)
        sum = sum + array_from[i];
    
    int sum_left = 0;
    int sum_right = 0;
    int index_right = index;
    int index_left = index;
    
    for(int i = 0; i < index; i++)
        sum_left = sum_left + array_from[i];
        
    for(int i = index; i < 4; i++)
        sum_right = sum_right + array_from[i];
        
    float buses_left;
    int buses_left_int;
    
    float buses_right;
    int buses_right_int;

    printf("%d человек едет влево \n", sum_left);
    printf("%d человек едет вправо \n", sum_right);
    
    while (sum_right > 0 || sum_left > 0){
        buses_left = ceil((double)sum_left / (double)20);
        buses_left_int = (int)buses_left;
        
        buses_right = ceil((double)sum_right / (double)20);
        buses_right_int = (int)buses_right;
        
        
        if (0 < index_left){
            printf("%d автобусов едет из города %c в город %c и высаживаем %d человек \n", buses_left_int, cities[index_left], cities[index_left-1], array_from[index_left-1]);
            index_left -= 1;
            array[index_left] += array_from[index_left];
            sum_left -= array_from[index_left];
        }
        
        if (index_right < 3){
            printf("%d автобусов едет из города %c в город %c и высаживаем %d человек \n", buses_right_int, cities[index_right], cities[index_right+1], array_from[index_right+1]);
            index_right += 1;
            array[index_right] += array_from[index_right];
            sum_right -= array_from[index_right];
        }
    }
    return array;
    
    
}

int main() {
    printf("Input amount of people in each city \n");
    int array[4];
    for (int i=0;i<4;i++) {
       scanf("%d",&array[i]);
    }
    
    
    int fd[5][2];
    
    for (int i = 0; i < 5; i++) {
        if (pipe(fd[i]) < 0) {
            return 1;
        }
    }
    
    int pid1 = fork();
    if (pid1 < 0) {
        return 2;
    }
    
    if (pid1 == 0) {
        close(fd[0][1]);
        close(fd[1][0]);
        close(fd[2][0]);
        close(fd[2][1]);
        close(fd[3][0]);
        close(fd[3][1]);
        close(fd[4][0]);
        close(fd[4][1]);
        
        int array[4];
        
        if (read(fd[0][0], &array, sizeof(int)*4) < 0) {
            return 3;
        }
        
        int *new_array = move_from_city(array, 0);
    
        
        if (write(fd[1][1], &array, sizeof(int)*4) < 0) {
            return 4;
        }
        close(fd[0][0]);
        close(fd[1][1]);
        return 0;
        
    }
    
    int pid2 = fork();
    if (pid2 < 0) {
        return 5;
    }
    
    if (pid2 == 0) {
        close(fd[0][0]);
        close(fd[0][1]);
        close(fd[1][1]);
        close(fd[2][0]);
        close(fd[3][0]);
        close(fd[3][1]);
        close(fd[4][0]);
        close(fd[4][1]);
        
        int array[4];
        
        if (read(fd[1][0], &array, sizeof(int)*4) < 0) {
            return 6;
        }
        
        int *new_array = move_from_city(array, 1);
        
        if (write(fd[2][1], &array, sizeof(int)*4) < 0) {
            return 7;
        }
        
        close(fd[1][0]);
        close(fd[2][1]);
        return 0;
    }
    
    int pid3 = fork();
    if (pid3 < 0) {
        return 8;
    }
    
    if (pid3 == 0) {
        close(fd[0][0]);
        close(fd[0][1]);
        close(fd[1][0]);
        close(fd[1][1]);
        close(fd[2][1]);
        close(fd[3][0]);
        close(fd[4][0]);
        close(fd[4][1]);
        
        int array[4];
        
            if (read(fd[2][0], &array, sizeof(int)*4) < 0) {
            return 9;
        }
        
        int *new_array = move_from_city(array, 2);
        
        if (write(fd[3][1], &array, sizeof(int)*4) < 0) {
            return 10;
        }
        
        close(fd[2][0]);
        close(fd[3][1]);
        return 0;
    }
    
    int pid4 = fork();
    if (pid4 < 0) {
        return 11;
    }
    
    if (pid4 == 0) {
        close(fd[0][0]);
        close(fd[0][1]);
        close(fd[1][1]);
        close(fd[2][0]);
        close(fd[2][1]);
        close(fd[3][1]);
        close(fd[1][0]);
        close(fd[4][0]);
        
        int array[4];
        
        if (read(fd[3][0], &array, sizeof(int)*4) < 0) {
            return 12;
        }
        
        int *new_array = move_from_city(array, 3);
        
        if (write(fd[4][1], &array, sizeof(int)*4) < 0) {
            return 13;
        }
        
        close(fd[3][0]);
        close(fd[4][1]);
        // return 0;
    }
    
    // Parent process
    
    close(fd[0][0]);
    close(fd[1][0]);
    close(fd[1][1]);
    close(fd[2][0]);
    close(fd[2][1]);
    close(fd[3][0]);
    close(fd[3][1]);
    close(fd[4][1]);
    
    int x = 0;
    if (write(fd[0][1], &array, sizeof(int)*4) < 0) {
        return 14;
    }
    
    if (read(fd[4][0], &array, sizeof(int)*4) < 0) {
        return 15;
    }
    printf("Теперь в городах жителей:\n");
    for(int i=0 ; i<4 ; i++)
    {
	    printf("%d\n", array[i]) ;
    }
    
    close(fd[0][1]);
    close(fd[4][0]);
    
    return 0;
}
