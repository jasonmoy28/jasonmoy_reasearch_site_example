# Guide to this Repository 

### How to get started? 

1. Fork this template to your github by clicking the Use this template

   ![Screen Shot 2020-11-21 at 12.21.48 AM](https://tva1.sinaimg.cn/large/0081Kckwly1gkw4g7p8o6j31tp0u048q.jpg)

   

2. Clone the repository to your local computer using terminal command or using one of the GUI (recommend [Source Tree](https://www.sourcetreeapp.com/) )

   * ```bash
     # Using the terminal command 
     git clone [https link] # the https link to your repo 
     ```

3. Initialize submodule (the submodule contains all the `CSS` file (i.e., the styling file of the website) using the terminal (highly recommend using GUI if you are not familiar with `git` command)

   * ```bash
     # On Mac or Linux 
     cd [path to your local git-repo] # e.g. my git repo is /Users/Jasonmoy/Desktop/jasonmoy_reasearch_site_example
     git submodule update --init --recursive #initialize the submodule
     
     #If you want to update the submodule 
     git submodule update --recursive
     ```

4. Change a few `HTML` files. All the place required changing are marked using comment 
   * `index.html` (or the home page) has 11 places to be changed 
   * `manuscript.html` has 5 places to be changed 
   * `visualization.html` has 4 places to be changed 
   * `poster.html` has 5 places to be changed 

5. Stored static files (e.g. manuscript, visualization or graphs, posters) in the folder `~/static`
6. If you need additional `CSS`, I recommend adding it in a new folder named `custom-style` 



### Example Site 

1. An example site of this template is hosted [here](https://jasonmoy28.github.io/jasonmoy_reasearch_site_example/)
2. An site using this template to created is hosted [here](https://research.jasonmoy.us/Vocabulary_Learning_Project/)

