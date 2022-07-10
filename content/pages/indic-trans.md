---
blocks:
  - body: "# ***IndicTrans***\n\n[Website](http://indicnlp.ai4bharat.org/samanantar)\_|\_[Paper](https://arxiv.org/abs/2104.05596)\_|\_[Video](https://youtu.be/QwYPOd1eBtQ?t=383)\n\n**IndicTrans**\_is a Transformer-4x ( ~434M ) multilingual NMT model trained on\_[Samanantar](https://indicnlp.ai4bharat.org/samanantar)\_dataset which is the largest publicly available parallel corpora collection for Indic languages at the time of writing ( 14 April 2021 ). It is a single script model i.e we convert all the Indic data to the Devanagari script which allows for\_***better lexical sharing between languages for transfer learning, prevents fragmentation of the subword vocabulary between Indic languages and allows using a smaller subword vocabulary***. We currently release two models - Indic to English and English to Indic and support the following 11 indic languages:\n\nAssamese (as)Hindi (hi)Marathi (mr)Tamil (ta)Bengali (bn)Kannada (kn)Odia (or)Telugu (te)Gujarati (gu)Malayalam (ml)Punjabi (pa)\n\n### Benchmarks\n\nWe evaluate IndicTrans model on a\_[WAT2021](http://lotus.kuee.kyoto-u.ac.jp/WAT/WAT2021/),\_[WAT2020](https://lotus.kuee.kyoto-u.ac.jp/WAT/WAT2020/), WMT (2014, 2019, 2020),\_[UFAL](https://ufal.mff.cuni.cz/~ramasamy/parallel/html),\_[PMI](https://data.statmt.org/pmindia)\_(subset of the PMIndia dataest created by us for Assamese) and\_[FLORES](https://github.com/facebookresearch/flores)\_benchmarks. It outperforms all publicly available open source models. It also outperforms commercial systems like Google, Bing translate on most datasets and performs competitively on Flores. Here are the results that we obtain:\n\n**WAT2021WAT2020WMTUFALPMIFLORES-101**bnguhiknmlmrorpatatebnguhimlmrtatehigutataasasbnguhiknmlmrorpatateIN-EN29.640.343.936.434.633.534.443.233.236.220.024.123.620.420.418.318.529.725.124.130.229.923.332.234.337.928.831.730.830.135.828.633.5EN-IN15.325.638.619.114.720.118.933.113.514.111.415.320.07.212.76.27.625.517.29.910.911.66.920.322.634.518.916.316.113.926.916.322.0\n\n## Updates\n\nClick to expand\n\n## Table of contents\n\n*   [Updates](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#updates)\n*   [Table of contents](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#table-of-contents)\n*   [Resources](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#resources)\n    *   [Try out model online (Huggingface spaces)](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#try-out-model-online-huggingface-spaces)\n    *   [Download model](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#download-model)\n    *   [Using hosted APIs](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#using-hosted-apis)\n        *   [Sample screenshot of translate\\_sentence POST request](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#sample-screenshot-of-translate\\_sentence-post-request)\n    *   [Accessing on ULCA](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#accessing-on-ulca)\n*   [Running Inference](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#running-inference)\n    *   [Command line interface](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#command-line-interface)\n    *   [Python Inference](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#python-inference)\n*   [Training model](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#training-model)\n    *   [Setting up your environment](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#setting-up-your-environment)\n    *   [Details of models and hyperparameters](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#details-of-models-and-hyperparameters)\n    *   [Training procedure and code](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#training-procedure-and-code)\n    *   [WandB plots](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#wandb-plots)\n    *   [Evaluating trained model](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#evaluating-trained-model)\n    *   [Detailed benchmarking results](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#detailed-benchmarking-results)\n*   [Finetuning model on your data](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#finetuning-model-on-your-data)\n*   [License](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#license)\n*   [Contributors](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#contributors)\n*   [Contact](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#contact)\n*   [Acknowledgements](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#acknowledgements)\n\n## Resources\n\n### Try out model online (Huggingface spaces)\n\n*   [IndicTrans Indic2English](https://huggingface.co/spaces/ai4bharat/IndicTrans-Indic2English)\n*   [IndicTrans English2Indic](https://huggingface.co/spaces/ai4bharat/IndicTrans-English2Indic)\n\n### Download model\n\nIndic to English:\_[v0.3](https://storage.googleapis.com/samanantar-public/V0.3/models/indic-en.zip)\n\nEnglish to Indic:\_[v0.3](https://storage.googleapis.com/samanantar-public/V0.3/models/en-indic.zip)\n\nIndic to Indic:\_[v0.3](https://storage.googleapis.com/samanantar-public/V0.3/models/m2m.zip)\n\n[Mirror links](https://indicnlp.ai4bharat.org/indic-trans/#mirror-links)\_for the IndicTrans models\n\n### Using hosted APIs\n\nClick to expand\n\nRefer to this colab notebook on how to use python to hit the API endpoints-->\_\n\n### Accessing on ULCA\n\nYou can try out our models at\_[ULCA](https://bhashini.gov.in/ulca/model/explore-models)\_and filter for IndicTrans models.\n\n## Running Inference\n\n### Command line interface\n\nThe model is trained on single sentences and hence, users need to split parapgraphs to sentences before running the translation when using our command line interface (The python interface has\_`translate_paragraph`\_method to handle multi sentence translations).\n\nNote: IndicTrans is trained with a max sequence length of\_**200**\_tokens (subwords). If your sentence is too long (> 200 tokens), the sentence will be truncated to 200 tokens before translation.\n\nHere is an example snippet to split paragraphs into sentences for English and Indic languages supported by our model:\n\n```\n# install these libraries\r\n# pip install mosestokenizer\r\n# pip install indic-nlp-library\r\n\r\nfrom mosestokenizer import *\r\nfrom indicnlp.tokenize import sentence_tokenize\r\n\r\nINDIC = [\"as\", \"bn\", \"gu\", \"hi\", \"kn\", \"ml\", \"mr\", \"or\", \"pa\", \"ta\", \"te\"]\r\n\r\ndef split_sentences(paragraph, language):\r\n    if language == \"en\":\r\n        with MosesSentenceSplitter(language) as splitter:\r\n            return splitter([paragraph])\r\n    elif language in INDIC:\r\n        return sentence_tokenize.sentence_split(paragraph, lang=language)\r\n\r\nsplit_sentences(\"\"\"COVID-19 is caused by infection with the severe acute respiratory\r\nsyndrome coronavirus 2 (SARS-CoV-2) virus strain. The disease is mainly transmitted via the respiratory\r\nroute when people inhale droplets and particles that infected people release as they breathe, talk, cough, sneeze, or sing. \"\"\", language='en')\r\n\r\n>> ['COVID-19 is caused by infection with the severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) virus strain.',\r\n 'The disease is mainly transmitted via the respiratory route when people inhale droplets and particles that infected people release as they breathe, talk, cough, sneeze, or sing.']\r\n\r\nsplit_sentences(\"\"\"இத்தொற்றுநோய் உலகளாவிய சமூக மற்றும் பொருளாதார சீர்குலைவை ஏற்படுத்தியுள்ளது.இதனால் பெரும் பொருளாதார மந்தநிலைக்குப் பின்னர் உலகளவில் மிகப்பெரிய மந்தநிலை ஏற்பட்டுள்ளது. இது விளையாட்டு,மத, அரசியல் மற்றும் கலாச்சார நிகழ்வுகளை ஒத்திவைக்க அல்லது ரத்து செய்ய வழிவகுத்தது.\r\nஅச்சம் காரணமாக முகக்கவசம், கிருமிநாசினி உள்ளிட்ட பொருட்களை அதிக நபர்கள் வாங்கியதால் விநியோகப் பற்றாக்குறை ஏற்பட்டது.\"\"\",\r\n language='ta')\r\n\r\n>> ['இத்தொற்றுநோய் உலகளாவிய சமூக மற்றும் பொருளாதார சீர்குலைவை ஏற்படுத்தியுள்ளது.',\r\n 'இதனால் பெரும் பொருளாதார மந்தநிலைக்குப் பின்னர் உலகளவில் மிகப்பெரிய மந்தநிலை ஏற்பட்டுள்ளது.',\r\n 'இது விளையாட்டு,மத, அரசியல் மற்றும் கலாச்சார நிகழ்வுகளை ஒத்திவைக்க அல்லது ரத்து செய்ய வழிவகுத்தது.',\r\n 'அச்சம் காரணமாக முகக்கவசம், கிருமிநாசினி உள்ளிட்ட பொருட்களை அதிக நபர்கள் வாங்கியதால் விநியோகப் பற்றாக்குறை ஏற்பட்டது.']\r\n\n```\n\nFollow the colab notebook to setup the environment, download the trained\_*IndicTrans*\_models and translating your own text.\n\nColab notebook for command line inference -->\_\n\n### Python Inference\n\nColab notebook for python inference -->\_\n\nThe python interface is useful in case you want to reuse the model for multiple translations and do not want to reinitialize the model each time\n\n## Training model\n\n### Setting up your environment\n\nClick to expand\n\n### Details of models and hyperparameters\n\n*   Architechture: IndicTrans uses 6 encoder and decoder layers, input embeddings of size 1536 with 16 attention heads and feedforward dimension of 4096 with total number of parameters of 434M\n*   Loss: Cross entropy loss\n*   Optimizer: Adam\n*   Label Smoothing: 0.1\n*   Gradient clipping: 1.0\n*   Learning rate: 5e-4\n*   Warmup\\_steps: 4000\n\nPlease refer to section 4, 5 of our\_[paper](https://arxiv.org/ftp/arxiv/papers/2104/2104.05596.pdf)\_for more details on training/experimental setup.\n\n### Training procedure and code\n\nThe high level steps we follow for training are as follows:\n\nOrganize the traning data as en-X folders where each folder has two text files containing parallel data for en-X lang pair.\n\n```\n# final_data\r\n# ├── en-as\r\n# │   ├── train.as\r\n# │   └── train.en\r\n# ├── en-bn\r\n# │   ├── train.bn\r\n# │   └── train.en\r\n# ├── en-gu\r\n# │   ├── train.en\r\n# │   └── train.gu\r\n# ├── en-hi\r\n# │   ├── train.en\r\n# │   └── train.hi\r\n# ├── en-kn\r\n# │   ├── train.en\r\n# │   └── train.kn\r\n# ├── ....\n```\n\nOrganize the developement set and test set of multiple benchmarks as follows:\n\n```\n<all devtest dir>\r\n├──<benchmark 1>\r\n|    ├── en-as\r\n|    ├── en-bn\r\n|    ├── en-gu\r\n|    └── en-hi\r\n|        ├── test.en\r\n|        ├── test.en\r\n|        ├── dev.en\r\n|        └── dev.hi\r\n├──<benchmark 2>\r\n|\r\n...\n```\n\nRemoving dev and test set overlaps from training data Refer to \"Training Data\" subsection in section 4 of our\_[paper](https://arxiv.org/ftp/arxiv/papers/2104/2104.05596.pdf)\_for more details on how we use a strict overlap removal method.\n\n```\npython3 remove_train_devtest_overlaps.py <train_data_dir> <all devtest dir>\r\n^ if you are only training for en-x\r\n\r\npython3 remove_train_devtest_overlaps.py <train_data_dir> <all devtest dir> true\r\n^ if you are training many2many model\n```\n\nPrepare the experiment folder and create the binarized data required for fairseq\n\n```\n<exp dir>             # named like indic-en-exp for indic-en training or en-indic-exp for en-indic training\r\n├──<devtest>\r\n    └── all\r\n        ├── en-as\r\n            ├── dev.en      # merge all en files for en-as dev sets\r\n            ├── dev.as      # merge all as files for en-as dev sets\r\n            ├── test.en     # merge all en files for en-as test sets\r\n            └── test.as     # merge all as files for en-as test sets\r\n        ├── en-bn\r\n        ├── en-gu\r\n        ├── ...\r\n        └── en-hi\r\n   ├── en-as\r\n   ├── en-bn\r\n   ├── ...\r\n   └── en-te\r\n        ├── train.en      # merged en train set for en-te with all devtest overlaps removed\r\n        └── train.te      # merged te train set for en-te with all devtest overlaps removed\r\n\r\n# Using exp dir, prepare the training data as required for Fairseq using prepare_data_joint_training.sh\r\n\r\n# prepare_data_joint_training.sh takes exp dir, src_lang, tgt_lang as input\r\n# This does preprocessing, building vocab, binarization for joint training\r\n\r\n# Creating the vocabulary will take a while if the dataset is huge. To make it faster, run it on a multicore system\r\nbash prepare_data_joint_training.sh '../indic-en-exp' 'indic' 'en'\n```\n\nStart training with fairseq-train command. Please refer to\_[fairseq documentaion](https://fairseq.readthedocs.io/en/latest/command\\_line\\_tools.html)\_to know more about each of these options\n\n```\n# some notable args:\r\n# --max-updates         -> maximum update steps the model will be trained for\r\n# --arch=transformer_4x -> we use a custom transformer model and name it transformer_4x (4 times the parameter size of transformer  base)\r\n# --user_dir            -> we define the custom transformer arch in model_configs folder and pass it as an argument to user_dir for fairseq to register this architechture\r\n# --lr                  -> learning rate. From our limited experiments, we find that lower learning rates like 3e-5 works best for finetuning.\r\n# --max_tokens          -> this is max tokens per batch. You should limit to lower values if you get oom errors.\r\n# --update-freq         -> gradient accumulation steps\r\n\r\nfairseq-train ../indic-en-exp/final_bin \\\r\n--max-source-positions=210 \\\r\n--max-target-positions=210 \\\r\n--max-update=<max_updates> \\\r\n--save-interval=1 \\\r\n--arch=transformer_4x \\\r\n--criterion=label_smoothed_cross_entropy \\\r\n--source-lang=SRC \\\r\n--lr-scheduler=inverse_sqrt \\\r\n--target-lang=TGT \\\r\n--label-smoothing=0.1 \\\r\n--optimizer adam \\\r\n--adam-betas \"(0.9, 0.98)\" \\\r\n--clip-norm 1.0 \\\r\n--warmup-init-lr 1e-07 \\\r\n--lr 0.0005 \\\r\n--warmup-updates 4000 \\\r\n--dropout 0.2 \\\r\n--save-dir ../indic-en-exp/model \\\r\n--keep-last-epochs 5 \\\r\n--patience 5 \\\r\n--skip-invalid-size-inputs-valid-test \\\r\n--fp16 \\\r\n--user-dir model_configs \\\r\n--wandb-project <wandb_project_name> \\\r\n--update-freq=<grad_accumulation_steps> \\\r\n--distributed-world-size <num_gpus> \\\r\n--max-tokens <max_tokens_in_a_batch>\r\n\n```\n\nThe above steps are further documented in our colab notebook\n\nPlease refer to this\_[issue](https://github.com/AI4Bharat/indicTrans/issues/23)\_to see discussion of our training hyperparameters.\n\n### WandB plots\n\n[IndicTrans en-indic model](https://wandb.ai/ai4b-anuvaad/indictrans4x-en-indic)\n\n[IndicTrans indic-en model](https://wandb.ai/ai4b-anuvaad/indictrans4x-indic-en)\n\n### Evaluating trained model\n\nThe trained model will get saved in the experiment directory. It will have the following files:\n\n```\n en-indic/                              # en to indic experiment directory\r\n ├── final_bin                          # contains fairseq dictionaries\r\n │   ├── dict.SRC.txt\r\n │   └── dict.TGT.txt\r\n ├── model                              # contains model checkpoint(s)\r\n │   └── checkpoint_best.pt\r\n └── vocab                              # contains bpes for src and tgt (since we train seperate vocabularies) generated with subword_nmt\r\n     ├── bpe_codes.32k.SRC\r\n     ├── bpe_codes.32k.TGT\r\n     ├── vocab.SRC\r\n     └── vocab.TGT\n```\n\nTo test the models after training, you can use\_`joint_translate.sh`\_to get output predictions and\_`compute_bleu.sh`\_to compute bleu scores.\n\n```\n# joint_translate takes src_file, output_fname, src_lang, tgt_lang, model_folder as inputs\r\n# src_file -> input text file to be translated\r\n# output_fname -> name of the output file (will get created) containing the model predictions\r\n# src_lang -> source lang code of the input text ( in this case we are using en-indic model and hence src_lang would be 'en')\r\n# tgt_lang -> target lang code of the input text ( tgt lang for en-indic model would be any of the 11 indic langs we trained on:\r\n#              as, bn, hi, gu, kn, ml, mr, or, pa, ta, te)\r\n# supported languages are:\r\n#              as - assamese, bn - bengali, gu - gujarathi, hi - hindi, kn - kannada,\r\n#              ml - malayalam, mr - marathi, or - oriya, pa - punjabi, ta - tamil, te - telugu\r\n\r\n# model_folder -> the directory containing the model and the vocab files ( the model is stored in exp_dir/model)\r\n\r\n\r\n\r\n# here we are translating the english sentences to hindi and model_folder contains the model checkpoint\r\nbash joint_translate.sh <path to test.en> en_hi_outputs.txt 'en' 'hi' model_folder\r\n\r\n# to compute bleu scores for the predicitions with a reference file, use the following command\r\n# arguments:\r\n# pred_fname: file that contains model predictions\r\n# ref_fname: file that contains references\r\n# src_lang and tgt_lang : the source and target language\r\n\r\nbash compute_bleu.sh en_hi_outputs.txt <path to test.hi reference file> 'en' 'hi'\r\n\n```\n\n### Detailed benchmarking results\n\nRefer to\_[Benchmarks](https://github.com/AI4Bharat/indicTrans/blob/main/README.md#benchmarks)\_for results of IndicTrans model on various benchmarks. Please refer to table 6,7 of our\_[paper](https://arxiv.org/ftp/arxiv/papers/2104/2104.05596.pdf)\_for comparison with other open source and commercial models and section 6 for detailed discussion of the results\n\n## Finetuning model on your data\n\nThe high level steps for finetuning on your own dataset are:\n\nOrganize the traning data as en-X folders where each folder has two text files containing parallel data for en-X lang pair.\n\n```\n# final_data\r\n# ├── en-as\r\n# │   ├── train.as\r\n# │   └── train.en\r\n# ├── en-bn\r\n# │   ├── train.bn\r\n# │   └── train.en\r\n# ├── en-gu\r\n# │   ├── train.en\r\n# │   └── train.gu\r\n# ├── en-hi\r\n# │   ├── train.en\r\n# │   └── train.hi\r\n# ├── en-kn\r\n# │   ├── train.en\r\n# │   └── train.kn\r\n# ├── ....\r\n\n```\n\nOrganize the developement set and test set of multiple benchmarks as follows:\n\n```\n<all devtest dir>\r\n├──<benchmark 1>\r\n|    ├── en-as\r\n|    ├── en-bn\r\n|    ├── en-gu\r\n|    └── en-hi\r\n|        ├── test.en\r\n|        ├── test.en\r\n|        ├── dev.en\r\n|        └── dev.hi\r\n├──<benchmark 2>\r\n|\r\n...\n```\n\nRemoving dev and test set overlaps from training data Refer to \"Training Data\" subsection in section 4 of our\_[paper](https://arxiv.org/ftp/arxiv/papers/2104/2104.05596.pdf)\_for more details on how we use a strict overlap removal method.\n\n```\npython3 remove_train_devtest_overlaps.py <train_data_dir> <all devtest dir>\r\n^ if you are only training for en-x\r\n\r\npython3 remove_train_devtest_overlaps.py <train_data_dir> <all devtest dir> true\r\n^ if you are training many2many model\n```\n\nAfter removing the dev and test set overlaps, you can move the train files and benchmark files (refer to colab notebook below for more details) to the experiment directory. This will have the trained checkpoint and the following structure:\n\n```\n# prepare the experiment folder\r\n\r\n <exp dir>                              # experiment directory\r\n ├── final_bin                          # contains fairseq dictionaries which we will use to binarize the new finetuning data\r\n │   ├── dict.SRC.txt\r\n │   └── dict.TGT.txt\r\n ├── model                              # contains model checkpoint(s)\r\n │   └── checkpoint_best.pt\r\n └── vocab                              # contains bpes for src and tgt (since we train seperate vocabularies) generated with subword_nmt\r\n     ├── bpe_codes.32k.SRC\r\n     ├── bpe_codes.32k.TGT\r\n     ├── vocab.SRC\r\n     └── vocab.TGT\r\n\r\n# We will use fairseq-train to finetune the model:\r\n\r\n\r\n# some notable args:\r\n# --max-update=1000     -> for this example, to demonstrate how to finetune we are only training for 1000 steps. You should increase this when finetuning\r\n# --arch=transformer_4x -> we use a custom transformer model and name it transformer_4x (4 times the parameter size of transformer  base)\r\n# --user_dir            -> we define the custom transformer arch in model_configs folder and pass it as an argument to user_dir for fairseq to register this architechture\r\n# --lr                  -> learning rate. From our limited experiments, we find that lower learning rates like 3e-5 works best for finetuning.\r\n# --restore-file        -> reload the pretrained checkpoint and start training from here (change this path for indic-en. Currently its is set to en-indic)\r\n# --reset-*             -> reset and not use lr scheduler, dataloader, optimizer etc of the older checkpoint\r\n# --max_tokns           -> this is max tokens per batch\r\n\r\n\r\nfairseq-train <exp_dir>/final_bin \\\r\n--max-source-positions=210 \\\r\n--max-target-positions=210 \\\r\n--max-update=1000 \\\r\n--save-interval=1 \\\r\n--arch=transformer_4x \\\r\n--criterion=label_smoothed_cross_entropy \\\r\n--source-lang=SRC \\\r\n--lr-scheduler=inverse_sqrt \\\r\n--target-lang=TGT \\\r\n--label-smoothing=0.1 \\\r\n--optimizer adam \\\r\n--adam-betas \"(0.9, 0.98)\" \\\r\n--clip-norm 1.0 \\\r\n--warmup-init-lr 1e-07 \\\r\n--warmup-updates 4000 \\\r\n--dropout 0.2 \\\r\n--tensorboard-logdir <exp_dir>/tensorboard-wandb \\\r\n--save-dir <exp_dir>/model \\\r\n--keep-last-epochs 5 \\\r\n--patience 5 \\\r\n--skip-invalid-size-inputs-valid-test \\\r\n--fp16 \\\r\n--user-dir model_configs \\\r\n--update-freq=2 \\\r\n--distributed-world-size 1 \\\r\n--max-tokens 256 \\\r\n--lr 3e-5 \\\r\n--restore-file <checkpoint exp_dir>/model/checkpoint_best.pt \\\r\n--reset-lr-scheduler \\\r\n--reset-meters \\\r\n--reset-dataloader \\\r\n--reset-optimizer\n```\n\nThe above steps (setup the environment, download the trained\_*IndicTrans*\_models and prepare your custom dataset for funetuning) are further documented in our colab notebook\_\n\nPlease refer to this\_[issue](https://github.com/AI4Bharat/indicTrans/issues/9)\_for some tips on finetuning.\n\n**Note**: Since this is a big model (400M params), you might not be able to train with reasonable batch sizes in the free google Colab account. We are planning to release smaller models (after pruning / distallation) soon.\n\n## Folder Structure\n\n```\n\r\nIndicTrans\r\n│   .gitignore\r\n│   apply_bpe_traindevtest_notag.sh         # apply bpe for joint vocab (Train, dev and test)\r\n│   apply_single_bpe_traindevtest_notag.sh  # apply bpe for seperate vocab   (Train, dev and test)\r\n│   binarize_training_exp.sh                # binarize the training data after preprocessing for fairseq-training\r\n│   compute_bleu.sh                         # Compute blue scores with postprocessing after translating with `joint_translate.sh`\r\n│   indictrans_fairseq_inference.ipynb      # colab example to show how to use model for inference\r\n│   indicTrans_Finetuning.ipynb             # colab example to show how to use model for finetuning on custom domain data\r\n│   joint_translate.sh                      # used for inference (see colab inference notebook for more details on usage)\r\n│   learn_bpe.sh                            # learning joint bpe on preprocessed text\r\n│   learn_single_bpe.sh                     # learning seperate bpe on preprocessed text\r\n│   LICENSE\r\n│   prepare_data.sh                         # prepare data given an experiment dir (this does preprocessing,\r\n│                                           # building vocab, binarization ) for bilingual training\r\n│   prepare_data_joint_training.sh          # prepare data given an experiment dir (this does preprocessing,\r\n│                                           # building vocab, binarization ) for joint training\r\n│   README.md\r\n│\r\n├───legacy                                  # old unused scripts\r\n├───model_configs                           # custom model configrations are stored here\r\n│       custom_transformer.py               # contains custom 4x transformer models\r\n│       __init__.py\r\n├───inference\r\n│       custom_interactive.py               # for python wrapper around fairseq-interactive\r\n│       engine.py                           # python interface for model inference\r\n└───scripts                                 # stores python scripts that are used by other bash scripts\r\n    │   add_joint_tags_translate.py         # add lang tags to the processed training data for bilingual training\r\n    │   add_tags_translate.py               # add lang tags to the processed training data for joint training\r\n    │   clean_vocab.py                      # clean vocabulary after building with subword_nmt\r\n    │   concat_joint_data.py                # concatenates lang pair data and creates text files to keep track\r\n    │                                       # of number of lines in each lang pair.\r\n    │   extract_non_english_pairs.py        # Mining Indic to Indic pairs from english centric corpus\r\n    │   postprocess_translate.py            # Postprocesses translations\r\n    │   preprocess_translate.py             # Preprocess translations and for script conversion (from indic to devnagiri)\r\n    │   remove_large_sentences.py           # to remove large sentences from training data\r\n    └───remove_train_devtest_overlaps.py    # Finds and removes overlaped data of train with dev and test sets\r\n\n```\n\n## Citing our work\n\nIf you are using any of the resources, please cite the following article:\n\n```\n@article{10.1162/tacl_a_00452,\r\n    author = {Ramesh, Gowtham and Doddapaneni, Sumanth and Bheemaraj, Aravinth and Jobanputra, Mayank and AK, Raghavan and Sharma, Ajitesh and Sahoo, Sujit and Diddee, Harshita and J, Mahalakshmi and Kakwani, Divyanshu and Kumar, Navneet and Pradeep, Aswin and Nagaraj, Srihari and Deepak, Kumar and Raghavan, Vivek and Kunchukuttan, Anoop and Kumar, Pratyush and Khapra, Mitesh Shantadevi},\r\n    title = \"{Samanantar: The Largest Publicly Available Parallel Corpora Collection for 11 Indic Languages}\",\r\n    journal = {Transactions of the Association for Computational Linguistics},\r\n    volume = {10},\r\n    pages = {145-162},\r\n    year = {2022},\r\n    month = {02},\r\n    abstract = \"{We present Samanantar, the largest publicly available parallel corpora collection for Indic languages. The collection contains a total of 49.7 million sentence pairs between English and 11 Indic languages (from two language families). Specifically, we compile 12.4 million sentence pairs from existing, publicly available parallel corpora, and additionally mine 37.4 million sentence pairs from the Web, resulting in a 4× increase. We mine the parallel sentences from the Web by combining many corpora, tools, and methods: (a) Web-crawled monolingual corpora, (b) document OCR for extracting sentences from scanned documents, (c) multilingual representation models for aligning sentences, and (d) approximate nearest neighbor search for searching in a large collection of sentences. Human evaluation of samples from the newly mined corpora validate the high quality of the parallel sentences across 11 languages. Further, we extract 83.4 million sentence\r\n                    pairs between all 55 Indic language pairs from the English-centric parallel corpus using English as the pivot language. We trained multilingual NMT models spanning all these languages on Samanantar which outperform existing models and baselines on publicly available benchmarks, such as FLORES, establishing the utility of Samanantar. Our data and models are available publicly at Samanantar and we hope they will help advance research in NMT and multilingual NLP for Indic languages.}\",\r\n    issn = {2307-387X},\r\n    doi = {10.1162/tacl_a_00452},\r\n    url = {https://doi.org/10.1162/tacl\\_a\\_00452},\r\n    eprint = {https://direct.mit.edu/tacl/article-pdf/doi/10.1162/tacl\\_a\\_00452/1987010/tacl\\_a\\_00452.pdf},\r\n}\r\n\n```\n\nWe would like to hear from you if:\n\n*   You are using our resources. Please let us know how you are putting these resources to use.\n*   You have any feedback on these resources.\n\n## License\n\nThe IndicTrans code (and models) are released under the MIT License.\n\n## Contributors\n\n*   Gowtham Ramesh,\_([RBCDSAI](https://rbcdsai.iitm.ac.in/),\_[IITM](https://www.iitm.ac.in/))\n*   Sumanth Doddapaneni,\_([RBCDSAI](https://rbcdsai.iitm.ac.in/),\_[IITM](https://www.iitm.ac.in/))\n*   Aravinth Bheemaraj,\_([Tarento](https://www.linkedin.com/company/tarento-group/),\_[EkStep](https://ekstep.in/))\n*   Mayank Jobanputra,\_([IITM](https://www.iitm.ac.in/))\n*   Raghavan AK,\_([AI4Bharat](https://ai4bharat.org/))\n*   Ajitesh Sharma,\_([Tarento](https://www.linkedin.com/company/tarento-group/),\_[EkStep](https://ekstep.in/))\n*   Sujit Sahoo,\_([Tarento](https://www.linkedin.com/company/tarento-group/),\_[EkStep](https://ekstep.in/))\n*   Harshita Diddee,\_([AI4Bharat](https://ai4bharat.org/))\n*   Mahalakshmi J,\_([AI4Bharat](https://ai4bharat.org/))\n*   Divyanshu Kakwani,\_([IITM](https://www.iitm.ac.in/),\_[AI4Bharat](https://ai4bharat.org/))\n*   Navneet Kumar,\_([Tarento](https://www.linkedin.com/company/tarento-group/),\_[EkStep](https://ekstep.in/))\n*   Aswin Pradeep,\_([Tarento](https://www.linkedin.com/company/tarento-group/),\_[EkStep](https://ekstep.in/))\n*   Srihari, Nagaraj,\_([Tarento](https://www.linkedin.com/company/tarento-group/),\_[EkStep](https://ekstep.in/))\n*   Kumar Deepak,\_([Tarento](https://www.linkedin.com/company/tarento-group/),\_[EkStep](https://ekstep.in/))\n*   Vivek Raghavan,\_([EkStep](https://ekstep.in/))\n*   Anoop Kunchukuttan,\_([Microsoft](https://www.microsoft.com/en-in/),\_[AI4Bharat](https://ai4bharat.org/))\n*   Pratyush Kumar,\_([RBCDSAI](https://rbcdsai.iitm.ac.in/),\_[AI4Bharat](https://ai4bharat.org/),\_[IITM](https://www.iitm.ac.in/))\n*   Mitesh Shantadevi Khapra,\_([RBCDSAI](https://rbcdsai.iitm.ac.in/),\_[AI4Bharat](https://ai4bharat.org/),\_[IITM](https://www.iitm.ac.in/))\n\n## Contact\n\n*   Anoop Kunchukuttan ([anoop.kunchukuttan@gmail.com](mailto:anoop.kunchukuttan@gmail.com))\n*   Mitesh Khapra ([miteshk@cse.iitm.ac.in](mailto:miteshk@cse.iitm.ac.in))\n*   Pratyush Kumar ([pratyush@cse.iitm.ac.in](mailto:pratyush@cse.iitm.ac.in))\n\n## Acknowledgements\n\nWe would like to thank EkStep Foundation for their generous grant which helped in setting up the Centre for AI4Bharat at IIT Madras to support our students, research staff, data and computational requirements. We would like to thank The Ministry of Electronics and Information Technology (NLTM) for its grant to support the creation of datasets and models for Indian languages under its ambitions Bhashini project. We would also like to thank the Centre for Development of Advanced Computing, India (C-DAC) for providing access to the Param Siddhi supercomputer for training our models. Lastly, we would like to thank Microsoft for its grant to create datasets, tools and resources for Indian languages.\n"
    _template: content
---
